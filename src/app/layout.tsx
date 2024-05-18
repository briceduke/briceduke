import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const jost = Jost({
	weight: "400",
	variable: "--font-jost",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Brice Duke",
	description: "Brice Duke's personal website and portfolio.",
	metadataBase: new URL("https://briceduke.dev"),
	icons: "https://briceduke.dev/BD.svg",
	openGraph: {
		title: "Brice Duke",
		description: "Brice Duke's personal website and portfolio.",
		images: ["https://briceduke.dev/BD.svg"],
	},
	twitter: {
		title: "Brice Duke",
		images: ["https://briceduke.dev/BD.svg"],
		card: "summary_large_image",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-serif tracking-wider antialiased transition-colors duration-300",
					jost.variable,
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="light">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
