"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function TypeCard({ type, percent }: { type: string, percent: number }) {    
    const [color, setColor] = useState<string>("#5cb85c");
    useEffect(() => {
        if(percent > 65) setColor("#d9534f");
        else if(percent > 35) setColor("#f0ad4e");
        else if(percent > 0) setColor("#428bca");
    }, [percent])

    return (
        <div className={`flex justify-around items-center bg-[${color}] w-2xs p-2 rounded-xl border-2 border-white`}>
            <div>
                <Image
                    src={`/types/${type}.png`}
                    alt={type}
                    width={100}
                    height={100}
                />
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl text-secondary">{type}</h1>
                <h1 className="text-4xl font-bold">{percent.toFixed(0)} %</h1>
            </div>
        </div>
    )
}