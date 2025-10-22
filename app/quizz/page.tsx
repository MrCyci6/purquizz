"use client"
import { useState } from "react";
import { useRouter } from "next/navigation"

import Question from "@/components/Question";
import { QuestionType, ScoreType } from "@/types/Question";
import questions from "@/storage/questions"

export default function Quizz() {
    const router = useRouter();

    const [score, setScore] = useState<ScoreType>({});
    const [question, setQuestion] = useState<QuestionType>(questions[0])

    const handleIncrement = (value: number, type: string) => {
        setScore(prev => ({
            ...prev,
            [type]: (prev[type] || 0) + value
        }));
        
        const index = questions.indexOf(question)+1;

        if(index != questions.length) {
            setQuestion(questions[index])
        } else {
            localStorage.setItem("score", JSON.stringify(score));
            router.push("/results")
        }
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <Question handleScore={handleIncrement} data={question} />
        </div>
    )
}