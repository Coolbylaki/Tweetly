import React from "react";

type Props = {
	isVisible: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

export default function Modal({ isVisible, onClose, children }: Props) {
	if (!isVisible) return null;

	const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
		const target = event.target as HTMLDivElement;
		if (target.id === "wrapper") onClose();
	};

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
			onClick={handleClose}
			id="wrapper">
			<div className="w-[300px] flex flex-col">
				<button className="text-white text-xl place-self-end" onClick={onClose}>
					X
				</button>
				<div className="bg-white p-2 text-black rounded-[var(--radius)]">{children}</div>
			</div>
		</div>
	);
}
