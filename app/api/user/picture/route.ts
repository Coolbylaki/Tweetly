import { prisma } from "@/lib/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();

	const updatedUser = await prisma.user.update({
		where: {
			email: body.email,
		},
		data: {
			profile_pic: body.image,
		},
	});

	if (updatedUser) {
		return NextResponse.json(
			{ message: "Profile image updated successfully" },
			{ status: 200 }
		);
	}

	return NextResponse.json({ message: "Image upload failed" }, { status: 404 });
}
