"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "./ui/button";

export function ThemeButton() {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			variant={"outline"}
			className="absolute right-8 top-8 gap-1"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<span>Theme:</span>
			{theme === "dark" ? (
				<p className="font-black">Dark</p>
			) : (
				<p className="font-black">Light</p>
			)}
		</Button>
	);
}
