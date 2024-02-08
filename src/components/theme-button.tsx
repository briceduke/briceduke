"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import * as React from "react"

export function ThemeButton() {
    const { setTheme, theme } = useTheme();

    return <Button size={'icon'} variant={'ghost'} className="absolute right-8 top-8" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? (
            <Sun className="h-4 w-4" />
        ) : (
            <Moon className="h-4 w-4" />
        )}
    </Button>
}