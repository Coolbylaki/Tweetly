"use client";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import { useState } from "react";

export default function DemoCreateAccount() {
	const [showLogin, setShowLogin] = useState(true);

	const handleChange = () => {
		setShowLogin((prevState) => !prevState);
	};

	return (
		<>
			{showLogin ? (
				<LoginForm showRegister={handleChange} />
			) : (
				<RegisterForm showLogin={handleChange} />
			)}
		</>
	);
}
