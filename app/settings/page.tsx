import { getServerSession } from "next-auth";
import { prisma } from "@/lib/utils/prisma";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NotAuthenticated from "@/components/Authentication/NotAuthenticated";
import ImageUpload from "@/components/SettingsPanel/ImageUpload";

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

				<ImageUpload profilePicture={user?.profile_pic} email={user?.email} />

				<Separator className="bg-gray-600 my-2" />

				<div className="flex items-center justify-between w-full">
					<label className="text-muted-foreground" htmlFor="name">
						NAME
					</label>
					<input
						type="text"
						placeholder={user?.name}
						className="text-right bg-inherit py-2"
						id="name"
						disabled
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />

				<div className="flex items-center justify-between w-full">
					<label className="text-muted-foreground" htmlFor="bio">
						BIO
					</label>
					<input
						type="text"
						placeholder={user?.bio}
						className="text-right bg-inherit py-2"
						id="bio"
						disabled
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />

				<div className="flex items-center justify-between w-full">
					<label className="text-muted-foreground" htmlFor="email">
						EMAIL
					</label>
					<input
						type="email"
						placeholder={user?.email}
						className="text-right bg-inherit py-2"
						id="email"
						disabled
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />

				<div className="flex items-center justify-between w-full">
					<label className="text-muted-foreground" htmlFor="password">
						PASS
					</label>
					<input
						type="password"
						placeholder="****"
						className="text-right bg-inherit py-2"
						id="password"
						disabled
					/>
				</div>
				<Separator className="bg-gray-600 my-2" />

				<Button className="w-full mt-2 mb-8">Submit changes</Button>
			</main>
		);
	}

	return <NotAuthenticated />;
}
