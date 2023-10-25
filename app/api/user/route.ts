import { NextResponse } from "next/server";
import { prisma } from "@/lib/utils/prisma";
import bcrypt from "bcryptjs";

export async function GET(req: Request) {
	const url = new URL(req.url);
	const searchParams = new URLSearchParams(url.search);
	const email = searchParams.get("email");

	try {
		// Check if user exist
		if (email) {
			const existingUser = await prisma.user.findUnique({
				where: { email },
			});

			if (existingUser) {
				existingUser.passhash = "";

				// Return user
				return NextResponse.json({ user: existingUser }, { status: 200 });
			}
		}

		throw new Error(`User with email ${email} does not exist`);
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 404 });
	}
}

export async function PUT(req: Request) {
	try {
		// Parse the JSON body of the PUT request
		const body = await req.json();

		// Check if the email is provided in the request body
		const email = body.email; // Assuming it's in the request body

		if (!email) {
			throw new Error("Email parameter is required for updating a user.");
		}

		// Retrieve the user with the given email
		const existingUser = await prisma.user.findUnique({
			where: { email },
		});

		if (!existingUser) {
			throw new Error(`User with email ${email} does not exist`);
		}

		// Update user properties if they are provided in the request body
		if (body) {
			const { name, bio, profile_banner, profile_pic, password } = body;

			if (name !== undefined) {
				existingUser.name = name;
			}

			if (bio !== undefined) {
				existingUser.bio = bio;
			}

			if (profile_banner !== undefined) {
				existingUser.profile_banner = profile_banner;
			}

			if (profile_pic !== undefined) {
				existingUser.profile_pic = profile_pic;
			}

			if (password !== undefined) {
				// Hash the new password with bcryptjs
				const salt = await bcrypt.genSalt(10);
				existingUser.passhash = await bcrypt.hash(password, salt);
			}

			// Save the updated user
			await prisma.user.update({
				where: { email },
				data: existingUser,
			});

			return NextResponse.json(
				{ message: "User updated successfully" },
				{ status: 200 }
			);
		} else {
			throw new Error("No user data provided for updating.");
		}
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 404 });
	}
}
