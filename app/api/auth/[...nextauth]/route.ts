import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { login } from "@/lib/utils/auth";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",

			credentials: {
				username: { label: "Username", type: "text", placeholder: "mr.smith" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				if (!credentials?.username || !credentials?.password) return null;

				try {
					const user = await login(credentials.username, credentials.password);
					return user;
				} catch (error) {
					console.error(error);
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: "/signIn",
	},
});

export { handler as GET, handler as POST };
