import { ThemeButton } from "@/components/theme-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return <main className="flex h-screen w-screen justify-center items-center flex-col p-8">
        <div className="max-w-[550px] flex flex-col">
            <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/briceduke.png" alt="@briceduke" />
                <AvatarFallback>BD</AvatarFallback>
            </Avatar>

            <h1 className="text-xl font-extrabold tracking-tight scroll-m-20 lg:text-3xl mt-2">
                Howdy!
            </h1>
            <p className="text-pretty text-lg">
                I am Brice Duke, a software engineer and student who loves to build cool things. I am studying Software Engineering at{' '}
                <Link className="underline" href={'https://www.utdallas.edu/'} target="_blank">
                    UT Dallas
                </Link>, and plan to graduate in Winter of 2025. I&apos;m also currently working on several software projects, which you can find on my{' '}
                <Link className="underline" href={'https://github.com/briceduke'} target="_blank">
                    GitHub
                </Link>. I&apos;d love to connect with other professionals and continue to learn and grow, so feel free to reach out to me using the links below.
            </p>
            <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-col">
                    <p>
                        Cheers,
                    </p>
                    <p className="text-xl text-muted-foreground">
                        Brice Duke
                    </p>
                </div>

                <div className="gap-2 flex">
                    <Button size={'icon'} variant={'ghost'} asChild>
                        <Link href={'mailto:bricewduke@gmail.com'}>
                            <Mail className="w-4 h-4" />
                        </Link>
                    </Button>
                    <Button size={'icon'} variant={'ghost'} asChild>
                        <Link href={'https://github.com/briceduke'}>
                            <Github className="w-4 h-4" />
                        </Link>
                    </Button>
                    <Button size={'icon'} variant={'ghost'} asChild>
                        <Link href={'https://www.linkedin.com/in/briceduke/'}>
                            <Linkedin className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>

        <ThemeButton />
    </main>
}