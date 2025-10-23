import Link from "next/link"

import FlagButton from "@/components/header/FlagButton";

export default function Header() {
    return (
        <header className="font-carter-one fixed top-0 w-full backdrop-blur-xs">
            <nav className="mt-5 flex justify-around">
                <Link href="/">
                    <h1 className="uppercase text-5xl"><span className="text-accent">p</span>ur<span className="text-accent">q</span>uizz</h1>
                </Link>
                <div className="flex gap-1 text-2xl">
                    <FlagButton flag="fr"/>
                    <FlagButton flag="en"/>
                    <FlagButton flag="uk"/>
                    <FlagButton flag="ru"/>
                </div>
            </nav>
        </header>
    )
}