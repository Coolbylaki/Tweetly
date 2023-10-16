"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function LoginButton() {
	return (
		<>
			<Button variant="ghost" className="hover:bg-inherit hover:text-primary">
				<Link href={"/login"}>Login</Link>
			</Button>
		</>
	);
}
