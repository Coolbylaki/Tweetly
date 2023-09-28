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
import { useState } from "react";
import API from "@/lib/utils/endpoint";

type Props = {
	showLogin: () => void;
};

export default function RegisterForm({ showLogin }: Props) {
	const [showSuccess, setShowSuccess] = useState(false);
	const initialValues = { email: "", password: "", name: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState<{
		email?: string;
		password?: string;
		name?: string;
	}>({});

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
			const userData = {
				email: formValues.email,
				password: formValues.password,
				name: formValues.name,
			};

			try {
				const response = await API.post("user/register", userData, {
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (response.status === 200) {
					console.log("User registered successfully!");
					setFormValues({
						email: "",
						password: "",
						name: "",
					});
					setShowSuccess(true);
				} else {
					console.error("User registration failed.");
				}
			} catch (error) {
				console.error("An error occurred:", error);
			}
		}
	};

	const validate = (values: any) => {
		const errors: Record<string, any> = {};
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!emailRegex.test(values.email)) {
			errors.email = "This is not a valid email format!";
		}

		if (!values.password) {
			errors.password = "Password is required!";
		} else if (!passwordRegex.test(values.password)) {
			errors.password =
				"Password must contain a number, uppercase letter and be at least 8 characters long";
		}

		if (!values.name) {
			errors.name = "Name is required!";
		}

		return errors;
	};

	return (
		<>
			{showSuccess ? (
				<Card className="px-4 py-8 text-center">
					<CardTitle className="text-2xl">Registration successful!</CardTitle>
					<CardDescription>Press anywhere to exit</CardDescription>
				</Card>
			) : (
				<Card>
					<CardHeader className="space-y-2">
						<CardTitle className="text-2xl">Register</CardTitle>
						<CardDescription>
							Enter email and a password below to create your account
						</CardDescription>
					</CardHeader>

					<form className="grid gap-4 p-6 pt-0" onSubmit={onSubmitHandler}>
						<div className="grid gap-2">
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								type="name"
								name="name"
								placeholder="John Doe"
								onChange={handleChange}
								value={formValues.name}
							/>
						</div>

						<p className="relative bottom-3 font-bold text-sm text-destructive">
							{formErrors.name || ""}
						</p>

						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								name="email"
								placeholder="johndoe@gmail.com"
								onChange={handleChange}
								value={formValues.email}
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
								Create an account
							</Button>
							<Button variant="ghost" className="w-1/3" onClick={() => showLogin()}>
								Login
							</Button>
						</CardFooter>
					</form>
				</Card>
			)}
		</>
	);
}
