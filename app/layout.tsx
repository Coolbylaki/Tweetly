import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import AuthProviders from "@/components/Authentication/AuthProviders";

import Navbar from "@/components/Navbar/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
	title: "Tweetly",
	description: "Tweetly is clone of popular social media platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${poppins.className} bg-muted`} suppressHydrationWarning>
				<AuthProviders>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						<Navbar />
						{children}
					</ThemeProvider>
				</AuthProviders>
			</body>
		</html>
	);
}
