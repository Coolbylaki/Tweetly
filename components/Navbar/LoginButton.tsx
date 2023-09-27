"use client";

import { Button } from "@/components/ui/button";
import Modal from "@/components/Authentication/Modal";
import { useState } from "react";

export default function LoginButton() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Button
				variant="ghost"
				className="hover:bg-inherit hover:text-primary"
				onClick={() => setShowModal(true)}>
				Login
			</Button>
			<Modal isVisible={showModal} onClose={() => setShowModal(false)}>
				<h1>Hello</h1>
			</Modal>
		</>
	);
}
