"use client";

import { ThemeButton } from "@/components/theme-button";
import { Button } from "@/components/ui/button";
import { Grainy } from "@/components/ui/grainy";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex h-screen w-screen justify-center items-center flex-col p-8">
			<div className="max-w-[550px] flex flex-col">
				<div className="dark:z-50 mb-4">
					<h1 className="text-xl font-extrabold tracking-wider scroll-m-20 lg:text-3xl bg-primary text-background py-2 px-4 w-fit">
						Howdy!
					</h1>
				</div>
				<p className="text-pretty text-lg">
					I am Brice Duke, a software engineer and student who loves to build
					cool things. I am studying Software Engineering at{" "}
					<Link
						className="underline"
						href={"https://www.utdallas.edu/"}
						target="_blank"
					>
						UT Dallas
					</Link>
					, and plan to graduate in Winter of 2025. I&apos;m also currently
					working on several software projects, which you can find on my{" "}
					<Link
						className="underline"
						href={"https://github.com/briceduke"}
						target="_blank"
					>
						GitHub
					</Link>
					. I&apos;d love to connect with other professionals and continue to
					learn and grow, so feel free to reach out to me using the links below.
				</p>

				<div className="flex flex-col mt-4">
					<p>Cheers,</p>
					<p className="text-xl text-muted-foreground">Brice Duke</p>
				</div>

				<div className="flex items-center gap-2 my-4">
					<div className="w-20 h-0.5 bg-primary" />
					<p className="tracking-[0.3em] uppercase text-sm shrink-0">
						More About Me
					</p>
					<div className="w-full h-0.5 bg-primary" />
				</div>

				<div className="flex justify-between xs:flex-row flex-col gap-4">
					<div className="flex gap-4 justify-between xs:w-1/2">
						<Button variant={"outline"} asChild className="w-full">
							<Link href={"mailto:bricewduke@gmail.com"}>Email</Link>
						</Button>
						<Button variant={"outline"} asChild className="w-full">
							<Link href={"https://github.com/briceduke"}>Github</Link>
						</Button>
					</div>
					<div className="flex gap-4 justify-between xs:w-1/2">
						<Button variant={"outline"} asChild className="w-full">
							<Link href={"https://www.linkedin.com/in/briceduke/"}>
								LinkedIn
							</Link>
						</Button>
						<Button variant={"outline"} asChild className="w-full">
							<Link href={"https://dev.to/briceduke/"}>Dev</Link>
						</Button>
					</div>
				</div>
			</div>
			<ThemeButton />
			<Grainy />
		</main>
	);
}
