"use client"

import { useState, useEffect } from "react";

import { ScoreType } from "@/types/Question";

export default function Results() {
    const [score, setScore] = useState<ScoreType>({})
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const content = window.localStorage.getItem("score") || "{}";
        setScore(JSON.parse(content));
    }, []);

    useEffect(() => {
        let t = 0;
        Object.entries(score).map(([, value]) => {
            t += value;
        });

        setTotal(t);
    }, [score]);

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1>Score final total: {total}</h1>
        </div>
    )
}