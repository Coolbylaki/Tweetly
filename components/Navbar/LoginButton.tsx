"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession, signIn } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function LoginButton() {
	const { data: session } = useSession();
	const pathname = usePathname();
	let isDisabled = false;

	if (pathname === "/signIn") isDisabled = !isDisabled;

	if (session && session.user) {
		return (
			<div className="flex items-center ml-2">
				<p className="text-primary">{session.user.name}</p>
				<Button
					variant="ghost"
					onClick={() => signOut()}
					className="hover:bg-inherit hover:text-primary">
					Sign Out
				</Button>
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
