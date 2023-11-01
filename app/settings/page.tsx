import { getServerSession } from "next-auth";
import { prisma } from "@/lib/utils/prisma";

import NotAuthenticated from "@/components/Authentication/NotAuthenticated";
import SettingsPanel from "@/components/SettingsPanel/SettingsPanel";

export default async function Settings() {
	const session = await getServerSession();

	if (session?.user?.email) {
		const user = await prisma.user.findUnique({
			where: { email: session?.user?.email },
		});

		return (
			<main className="flex flex-col mt-8 mx-6">
				<SettingsPanel user={user} />
			</main>
		);
	}

	return <NotAuthenticated />;
}
