import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, FormEvent } from "react";
import { useState, useEffect } from "react";

type Props = {
	showRegister: () => void;
};

export default function LoginForm({ showRegister }: Props) {
	const initialValues = { email: "", password: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState<{ email?: string; password?: string }>(
		{}
	);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validate the form
		const errors = validate(formValues);

		// Set the form errors
		setFormErrors(errors);

		// Check if there are no errors
		if (Object.keys(errors).length === 0) {
			const user = {
				email: formValues.email,
				password: formValues.password,
			};
		}
	};

	const validate = (values: any) => {
		const errors: Record<string, any> = {};
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		const passwordRegex = /^(?=.*\d).{8,}$/;

		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!emailRegex.test(values.email)) {
			errors.email = "This is not a valid email format!";
		}

		if (!values.password) {
			errors.password = "Password is required!";
		} else if (!passwordRegex.test(values.password)) {
			errors.password =
				"Password must contain a number and be at least 8 characters long";
		}

		return errors;
	};

	return (
		<Card>
			<CardHeader className="space-y-2">
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Please enter your credentials to login or register an account on the button
					below
				</CardDescription>
			</CardHeader>

			<form className="grid gap-4 p-6 pt-0" onSubmit={onSubmitHandler}>
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						name="email"
						placeholder="johndoe@gmail.com"
						onChange={handleChange}
						defaultValue={formValues.email}
					/>
				</div>

				<p className="relative bottom-3 font-bold text-sm text-destructive">
					{formErrors.email || ""}
				</p>

				<div className="grid gap-2">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						name="password"
						placeholder="********"
						onChange={handleChange}
						defaultValue={formValues.password}
					/>
				</div>

				<p className="relative bottom-3 font-bold text-sm text-destructive">
					{formErrors.password || ""}
				</p>

				<CardFooter className="flex gap-2 p-0">
					<Button className="w-full" type="submit">
						Login
					</Button>
					<Button variant="ghost" className="w-1/3" onClick={() => showRegister()}>
						Register
					</Button>
				</CardFooter>
			</form>
		</Card>
	);
}
