"use client"

import Link from "next/link";

export default function StartButton() {
    const handleIncrement = async () => {
        await fetch("/api/stat", { method: "PUT" });
    }

    return (
        <Link onClick={handleIncrement} href="/quizz" className="font-bold hover:bg-[#ec971f] bg-[#f0ad4e] p-2 rounded-xl">
            <div className="flex justify-center items-center">
                <h1 className="text-xl">Commencer le test de pureté</h1>
            </div>
        </Link>
    )
}