"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { ChangeEvent, useState } from "react";

type Props = {
	profilePicture: string | undefined;
	email: string | undefined;
};

export default function ImageUpload({ profilePicture, email }: Props) {
	const [profilePic, setProfilePic] = useState<string | undefined>(profilePicture);

	const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const formData = new FormData();
		const imgbbApiKey = process.env.NEXT_PUBLIC_IMGBB_API;

		if (e.target.files) formData.append("image", e.target.files[0]);

		if (imgbbApiKey) {
			formData.append("key", imgbbApiKey);
		}

		try {
			const response = await fetch("https://api.imgbb.com/1/upload", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				const data = await response.json();

				try {
					const response = await fetch("api/user/picture", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: email,
							image: data.data.display_url,
						}),
					});
				} catch (error) {
					console.error("Saving image to database failed", error);
				}

				setProfilePic(data.data.display_url);
			} else {
				console.error("Image upload failed");
			}
		} catch (error) {
			console.error("Image upload error:", error);
		}
	};

	return (
		<div className="flex items-center justify-between w-full">
			<label className="relative">
				<Button variant={"outline"} className="bg-inherit border-foreground">
					<input
						type="file"
						accept="image/*"
						onChange={handleFileChange}
						className="text-transparent absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
					/>
					Upload Image
				</Button>
			</label>

			<Image
				width={72}
				height={72}
				alt="Profile picture"
				src={profilePic || "https://i.stack.imgur.com/34AD2.jpg"}
				className="rounded-lg"
			/>
		</div>
	);
}
