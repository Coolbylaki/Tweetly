"use client";

import Image from "next/image";
import LogoImg from "@/assets/logo.png";
import { useRouter } from "next/navigation";

export default function Logo() {
	const router = useRouter();

	return (
		<div className="flex items-center gap-2 ">
			<Image
				src={LogoImg}
				width={32}
				alt="Page logo"
				onClick={() => router.push("/")}
				className="cursor-pointer"
			/>
			<h1 className="hidden md:block font-semibold tracking-tight text-xl">Tweetly</h1>
		</div>
	);
}
