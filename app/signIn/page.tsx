import LoginForm from "@/components/Authentication/LoginForm";

type Props = {
	searchParams?: Record<"callbackUrl" | "error", string>;
};

export default function SignIn(props: Props) {
	return (
		<main className="min-h-[90vh] flex justify-center items-center">
			<LoginForm
				error={props.searchParams?.error}
				callbackUrl={props.searchParams?.callbackUrl}
			/>
		</main>
	);
}
