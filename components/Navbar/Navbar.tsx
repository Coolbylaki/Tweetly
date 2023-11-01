import { getServerSession } from "next-auth";
import { prisma } from "@/lib/utils/prisma";

import ModeToggle from "@/components/Theme/Toggle";
import MainNavigation from "./MainNavigation";
import LoginButton from "./LoginButton";
import Logo from "./Logo";

export default async function Navbar() {
	const session = await getServerSession();
	let user;

	if (session?.user?.email) {
		user = await prisma.user.findUnique({
			where: { email: session?.user?.email },
		});
	}

	return (
		<nav className="flex justify-between shadow-md bg-background p-4 md:px-12 xl:px-16 items-center">
			<Logo />

			<MainNavigation />

			<div className="flex items-center">
				<ModeToggle />
				<LoginButton image={user?.profile_pic} />
			</div>
		</nav>
	);
}
