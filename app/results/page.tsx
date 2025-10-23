"use client"

import { useState, useEffect } from "react";

import { ScoreType, MaxScoreRequestType } from "@/types/Question";

import TypeCard from "@/components/result/TypeCard";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

export default function Results() {
    const [userData, setUserData] = useState<ScoreType>({})
    const [scoreData, setScoreData] = useState<ScoreType>({})
    const [loading, setLoading] = useState<boolean>(true)


    useEffect(() => {
        const content = window.localStorage.getItem("score") || "{}";
        setUserData(JSON.parse(content));

        fetch('/api/question/type')
            .then(res => res.json())
            .then(json => {
                setScoreData(json);
                setLoading(false);
            });
    }, []);

    if(loading) {
        return (
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="font-carter-one">Chargement...</h1>
            </div>
        )
    }

    const chartData: any[] = [];
    return (
        <div className="mt-50 h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl">Votre score : {userData.total} point(s)</h1>

            <div className="mt-10 grid grid-rows-2 grid-flow-col">
                {
                    Object.entries(userData).map(([key, value]) => {
                        if(key != "total") {
                            const percent = (value * 100)/scoreData[key];
                            chartData.push({ subject: key, value: percent });

                            return <TypeCard key={key} type={key} percent={percent} />
                        }
                    })
                }
            </div>

            <div className="mt-10">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    width={500}
                    height={400}
                    data={chartData}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} className="font-bold" />
                    <Radar
                        dataKey="value"
                        stroke="#d9534f"
                        fill="#d9534f"
                        fillOpacity={0.2}
                    />

                </RadarChart>
            </div>
        </div>
    )
}