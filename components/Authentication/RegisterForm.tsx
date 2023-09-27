import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
	showLogin: () => void;
};

export default function RegisterForm({ showLogin }: Props) {
	return (
		<Card>
			<CardHeader className="space-y-2">
				<CardTitle className="text-2xl">Register</CardTitle>
				<CardDescription>
					Enter email and a password below to create your account
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="johndoe@gmail.com" />
				</div>
				<div className="grid gap-2">
					<Label htmlFor="password">Password</Label>
					<Input id="password" type="password" />
				</div>
			</CardContent>
			<CardFooter className="flex gap-2">
				<Button className="w-full">Create an account</Button>
				<Button variant="ghost" className="w-1/3" onClick={() => showLogin()}>
					Login
				</Button>
			</CardFooter>
		</Card>
	);
}
