"use client"

import Image from "next/image";
import Link from "next/link";

import { usePathname  } from "next/navigation";

export default function FlagButton({ flag }: { flag: string }) {
    const pathName = usePathname();
    const isActive = pathName.startsWith(`/${flag}`) || (pathName == "/" && flag == "fr");
    
    return (
        <Link href={`/${flag}`} className={isActive ? "border-b-2 border-white" : "hover:border-b-2 hover:border-gray-600"}>
            <Image
                src={`/flags/${flag}.png`}
                alt={flag}
                width={64}
                height={64}
                className="rounded-full w-10 h-10 "
            />
        </Link>
    )
}