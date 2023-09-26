import Image from "next/image";
import Logo from "@/assets/logo.png";
import ModeToggle from "../Theme/Toggle";
import { Button } from "../ui/button";

export default function Navbar() {
	return (
		<nav className="flex justify-between shadow-md bg-background p-4 items-center">
			<div className="flex items-center gap-2">
				<Image src={Logo} width={32} alt="Page logo" />
				<h1 className="hidden md:block">Tweetly</h1>
			</div>
			<div className="flex items-center">
				<ModeToggle />
				<Button variant="ghost" className="hover:bg-inherit hover:text-primary">
					Login
				</Button>
			</div>
		</nav>
	);
}
