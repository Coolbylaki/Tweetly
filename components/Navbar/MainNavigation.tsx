"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MainNavigation() {
	const path = usePathname();
	console.log(path);

	return (
		<div className="hidden md:flex gap-12 text-sm text-muted-foreground">
			<Link href="/" className={path === "/" ? "text-primary" : ""}>
				Home
			</Link>
			<Link href="/explore" className={path === "/explore" ? "text-primary" : ""}>
				Explore
			</Link>
			<Link href="/bookmarks" className={path === "/bookmarks" ? "text-primary" : ""}>
				Bookmarks
			</Link>
		</div>
	);
}
