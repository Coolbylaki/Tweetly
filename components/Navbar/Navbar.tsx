import Image from "next/image";
import Logo from "@/assets/logo.png";
import ModeToggle from "@/components/Theme/Toggle";
import { Button } from "@/components/ui/button";
import MainNavigation from "./MainNavigation";

export default function Navbar() {
	return (
		<nav className="flex justify-between shadow-md bg-background p-4 md:px-12 xl:px-16 items-center">
			<div className="flex items-center gap-2">
				<Image src={Logo} width={32} alt="Page logo" />
				<h1 className="hidden md:block font-semibold tracking-tight text-xl">Tweetly</h1>
			</div>

			<MainNavigation />

			<div className="flex items-center">
				<ModeToggle />
				<Button variant="ghost" className="hover:bg-inherit hover:text-primary">
					Login
				</Button>
			</div>
		</nav>
	);
}
