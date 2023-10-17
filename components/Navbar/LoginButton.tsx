"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession, signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Arrow from "@/assets/svg/arrow";
import Image from "next/image";

export default function LoginButton() {
	const { data: session } = useSession();
	const pathname = usePathname();
	let isDisabled = false;

	if (pathname === "/signIn") isDisabled = !isDisabled;

	if (session && session.user) {
		return (
			<div className="flex justify-center items-center ml-2 cursor-pointer">
				<Avatar>
					<AvatarImage src={session.user.image || ""} />
					<AvatarFallback>{session.user.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
				</Avatar>
				<p className="hidden lg:block text-foreground text-sm ml-4 mr-2">
					{session.user.name}
				</p>

				<Arrow className="fill-foreground w-[12px] hidden lg:block" />

				{/* <Image src={Arrow} width={30} alt="profile menu" className="fill-white" /> */}
				{/* <Button
					variant="ghost"
					onClick={() => signOut()}
					className="hover:bg-inherit hover:text-primary">
					Sign Out
				</Button> */}
			</div>
		);
	}

	return (
		<>
			<Button
				variant="ghost"
				onClick={() => signIn()}
				className="hover:bg-inherit hover:text-primary"
				disabled={isDisabled}>
				Login
			</Button>
		</>
	);
}
