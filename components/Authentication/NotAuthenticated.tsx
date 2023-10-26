import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotAuthenticated() {
	return (
		<div className="grid h-[90vh] px-4 place-content-center">
			<div className="text-center">
				<h1 className="font-black text-foreground text-9xl md:text-[12rem]">401</h1>

				<p className="text-2xl font-bold tracking-tight text-secondary-foreground sm:text-4xl md:my-4 md:text-5xl">
					Uh-oh!
				</p>

				<p className="my-4 text-accent-foreground md:text-lg">You are not logged in</p>

				<Button>
					<Link href="/">Go Back Home</Link>
				</Button>
			</div>
		</div>
	);
}
