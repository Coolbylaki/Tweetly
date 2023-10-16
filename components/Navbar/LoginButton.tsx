"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession, signIn } from "next-auth/react";

import Link from "next/link";

export default function LoginButton() {
	const { data: session } = useSession();

	if (session && session.user) {
		return (
			<div className="flex gap-4 ml-auto">
				<p className="text-primary-foreground">{session.user.name}</p>
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
				className="hover:bg-inherit hover:text-primary">
				Login
			</Button>
		</>
	);
}
