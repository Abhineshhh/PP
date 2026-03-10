import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

export const metadata: Metadata = {
	metadataBase: new URL("https://abhineshhh.me"),
	title: {
		default: "Abhinesh Jha - Portfolio",
		template: "%s | Abhinesh Jha",
	},
	description:
		"Abhinesh Jha is a Backend-focused developer specializing in building scalable systems and developer tools with Java, Spring Boot, and Go.",
	openGraph: {
		title: "Abhinesh Jha — Full Stack Developer",
		description:
			"Full Stack Developer & open-source contributor specializing in Java, Spring Boot, Next.js & TypeScript.",
		url: "https://abhineshhh.me",
		siteName: "Abhinesh Jha",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Abhinesh Jha — Full Stack Developer",
		description:
			"Full Stack Developer & open-source contributor specializing in Java, Spring Boot, Next.js & TypeScript.",
	},
	robots: {
		index: true,
		follow: true,
	},
};

const cx = (...classes: (string | undefined)[]) =>
	classes.filter(Boolean).join(" ");

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={cx(
				"text-black bg-white dark:text-white dark:bg-[#111010]",
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<body className="antialiased max-w-2xl flex flex-col md:flex-row mx-auto px-4 mt-8">
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black dark:focus:bg-neutral-900 dark:focus:text-white"
				>
					Skip to main content
				</a>
				<main
					id="main-content"
					className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0"
				>
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
