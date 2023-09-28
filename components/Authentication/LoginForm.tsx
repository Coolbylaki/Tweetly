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
	showRegister: () => void;
};

export default function LoginForm({ showRegister }: Props) {
	// TODO: Validate login form

	// TODO: Send login data to backend

	return (
		<Card>
			<CardHeader className="space-y-2">
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Please enter your credentials to login or register an account on the button
					below
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form action="" className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder="johndoe@gmail.com" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Password</Label>
						<Input id="password" type="password" placeholder="********" />
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex gap-2">
				<Button className="w-full">Login</Button>
				<Button variant="ghost" className="w-1/3" onClick={() => showRegister()}>
					Register
				</Button>
			</CardFooter>
		</Card>
	);
}
