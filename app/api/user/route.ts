import { NextResponse } from "next/server";
import { prisma } from "@/lib/utils/prisma";

export async function GET(req: Request) {
	const url = new URL(req.url);
	const searchParams = new URLSearchParams(url.search);
	const email = searchParams.get("email");

	try {
		// Check if user exist
		if (email) {
			const doesExist = await prisma.user.findUnique({
				where: { email },
			});

			if (doesExist) {
				doesExist.passhash = "";

				// Return user
				return NextResponse.json({ user: doesExist }, { status: 200 });
			}
		}

		throw new Error(`User with email ${email} does not exist`);
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 404 });
	}
}
