"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";

import ImageUpload from "@/components/SettingsPanel/ImageUpload";

type Props = {
	user: {
		profile_pic: string;
		name: string;
		email: string;
		bio: string;
	} | null;
};

export default function SettingsPanel(props: Props) {
	const [isNotEditable, setIsNotEditable] = useState<boolean>(true);

	return (
		<>
			<h1 className="text-3xl font-bold text-center">Personal info</h1>
			<h2 className="text-sm opacity-80 text-center">
				Basic info, like your name and photo
			</h2>

			<div className="flex gap-16 mt-6 items-center mb-4">
				<div>
					<h3 className="text-2xl mb-[0.25rem] font-semibold">Profile</h3>
					<h4 className="text-sm opacity-80">
						Some info may be visible to other people
					</h4>
				</div>
				<Button
					className="bg-inherit border-foreground rounded-xl px-8"
					variant="outline"
					onClick={() => setIsNotEditable((prevState) => !prevState)}>
					Edit
				</Button>
			</div>

			<ImageUpload profilePicture={props.user?.profile_pic} email={props.user?.email} />

			<Separator className="bg-gray-600 my-2" />

			<form>
				<div className="flex items-center justify-between w-full">
					<label className="text-muted-foreground" htmlFor="name">
						NAME
					</label>
					<input
						type="text"
						placeholder={props.user?.name}
						className={`text-right bg-inherit py-2 max-w-[150px] ${
							isNotEditable ? "" : "placeholder:text-primary"
						}`}
						id="name"
						disabled={isNotEditable}
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />

				<div className="flex items-center justify-between w-full">
					<label className="text-muted-foreground" htmlFor="bio">
						BIO
					</label>
					<input
						type="text"
						placeholder={props.user?.bio}
						className={`text-right bg-inherit py-2 max-w-[150px] ${
							isNotEditable ? "" : "placeholder:text-primary"
						}`}
						id="bio"
						disabled={isNotEditable}
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />

				<div className="flex items-center justify-between w-full">
					<label className="text-muted-foreground" htmlFor="email">
						EMAIL
					</label>
					<input
						type="email"
						placeholder={props.user?.email}
						className={`text-right bg-inherit py-2 max-w-[150px] ${
							isNotEditable ? "" : "placeholder:text-primary"
						}`}
						id="email"
						disabled={isNotEditable}
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />

				<div className="flex items-center justify-between w-full">
					<label className="text-muted-foreground" htmlFor="password">
						PASSWORD
					</label>
					<input
						type="password"
						placeholder="********"
						className={`text-right bg-inherit py-2 max-w-[150px] ${
							isNotEditable ? "" : "placeholder:text-primary"
						}`}
						id="password"
						disabled={isNotEditable}
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />

				<Button
					className="w-full mt-2 mb-8"
					type="submit"
					onClick={(e) => e.preventDefault()}>
					Submit changes
				</Button>
			</form>
		</>
	);
}
