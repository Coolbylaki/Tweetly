import ModeToggle from "@/components/Theme/Toggle";
import MainNavigation from "./MainNavigation";
import LoginButton from "./LoginButton";
import Logo from "./Logo";

export default function Navbar() {
	return (
		<nav className="flex justify-between shadow-md bg-background p-4 md:px-12 xl:px-16 items-center">
			<Logo />

			<MainNavigation />

			<div className="flex items-center">
				<ModeToggle />
				<LoginButton />
			</div>
		</nav>
	);
}
