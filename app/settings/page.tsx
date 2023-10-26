import { getServerSession } from "next-auth";
import { prisma } from "@/lib/utils/prisma";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NotAuthenticated from "@/components/Authentication/NotAuthenticated";

export default async function Settings() {
	const session = await getServerSession();

	if (session?.user?.email) {
		const user = await prisma.user.findUnique({
			where: { email: session?.user?.email },
		});

		return (
			<main className="flex flex-col items-center mt-8 mx-6 gap-2">
				<h1 className="text-3xl font-bold">Personal info</h1>
				<h2 className="text-sm opacity-80">Basic info, like your name and photo</h2>

				<div className="flex gap-16 mt-6 items-center mb-4">
					<div>
						<h3 className="text-2xl mb-[0.25rem] font-semibold">Profile</h3>
						<h4 className="text-sm opacity-80">
							Some info may be visible to other people
						</h4>
					</div>
					<Button
						className="bg-inherit border-foreground rounded-xl px-8"
						variant="outline">
						Edit
					</Button>
				</div>

				<div className="flex items-center justify-between w-full">
					<p className="text-muted-foreground">PHOTO</p>

					<Image
						width={72}
						height={72}
						alt="Profile picture"
						src={
							user?.profile_pic ||
							"https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw"
						}
						className="rounded-lg"
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />

				<div className="flex items-center justify-between w-full">
					<label className="text-muted-foreground" htmlFor="name">
						NAME
					</label>
					<input
						type="text"
						defaultValue={user?.name}
						className="text-right bg-inherit py-2"
						id="name"
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />

				<div className="flex items-center justify-between w-full">
					<label className="text-muted-foreground" htmlFor="bio">
						BIO
					</label>
					<input
						type="text"
						defaultValue={user?.bio}
						className="text-right bg-inherit py-2"
						id="bio"
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />

				<div className="flex items-center justify-between w-full">
					<label className="text-muted-foreground" htmlFor="email">
						EMAIL
					</label>
					<input
						type="text"
						defaultValue={user?.email}
						className="text-right bg-inherit py-2"
						id="email"
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />

				<div className="flex items-center justify-between w-full">
					<label className="text-muted-foreground" htmlFor="password">
						PASSWORD
					</label>
					<input
						type="text"
						defaultValue="*********"
						className="text-right bg-inherit py-2"
						id="password"
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />
			</main>
		);
	}

	return <NotAuthenticated />;
}
