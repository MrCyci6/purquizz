"use client"

import { useState, useEffect } from "react";

export default function Stat() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        fetch("/api/stat")
            .then(res => res.json())
            .then(json => {
                setCount(json.count)
            });
    }, []);

    return (
        <div>
            <h1 className="text-xl">{count} tests ont été effectués</h1>
        </div>
    )
}