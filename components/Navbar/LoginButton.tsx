"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession, signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Arrow from "@/assets/svg/arrow";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faGear,
	faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function LoginButton() {
	const { data: session } = useSession();
	const pathname = usePathname();
	let isDisabled = false;

	if (pathname === "/signIn") isDisabled = !isDisabled;

	if (session && session.user) {
		return (
			<>
				<DropdownMenu>
					<DropdownMenuTrigger className="focus:outline-none">
						<div className="flex justify-center items-center cursor-pointer">
							<Avatar>
								<AvatarImage src={session.user.image || ""} />
								<AvatarFallback>
									{session.user.name?.slice(0, 2).toUpperCase()}
								</AvatarFallback>
							</Avatar>
							<p className="hidden lg:block text-foreground text-sm ml-4 mr-2 dropdown-p">
								{session.user.name?.split(" ")[0]}
							</p>
							<Arrow className="fill-foreground w-[12px] hidden lg:block dropdown-arrow" />
						</div>
					</DropdownMenuTrigger>

					<DropdownMenuContent className="mt-1 mr-4 md:mr-12 lg:mr-0 lg:ml-16">
						<DropdownMenuItem className="gap-2">
							<FontAwesomeIcon icon={faUser} className="text-foreground" />
							My Profile
						</DropdownMenuItem>
						<Link href="/settings">
							<DropdownMenuItem className="gap-2">
								<FontAwesomeIcon icon={faGear} className="text-foreground" />
								Settings
							</DropdownMenuItem>
						</Link>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="gap-2" onClick={() => signOut()}>
							<FontAwesomeIcon
								icon={faArrowRightFromBracket}
								className="text-foreground"
							/>
							Logout
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</>
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
