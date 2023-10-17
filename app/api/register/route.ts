import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/utils/validationSchema";
import { prisma } from "@/lib/utils/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
	const data = await req.json();

	try {
		// Joi validation
		const result = await registerSchema.validateAsync(data);

		// Check if email already exist
		const doesExist = await prisma.user.findUnique({
			where: { email: result.email },
		});

		if (doesExist)
			return NextResponse.json(
				{ message: `${result.email} is already been registered` },
				{ status: 409 }
			);

		// Hash the password
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(result.password, salt);
		result.password = hash;

		// Create the user in the database
		const savedUser = await prisma.user.create({
			data: {
				name: result.name,
				email: result.email,
				passhash: result.password,
			},
		});

		return NextResponse.json(
			{ message: "User registered successfully", user: savedUser },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ message: "User registration failed" }, { status: 400 });
	}
}
