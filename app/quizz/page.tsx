"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"

import Question from "@/components/quizz/Question";
import { QuestionType, ScoreType } from "@/types/Question";

export default function Quizz() {
    const router = useRouter();

    const [score, setScore] = useState<ScoreType>({});
    const [total, setTotal] = useState<number>(0);
    const [questions, setQuestions] = useState<Array<QuestionType>>([]);
    const [question, setQuestion] = useState<QuestionType>(questions[0]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("/api/question", { method: "GET" })
            .then(res => res.json())
            .then(json => {
                setQuestions(json);
                setQuestion(json[0]);
                setLoading(false);
            })
    }, []);


    const handleIncrement = (value: number, type: string) => {        
        const index = questions.indexOf(question)+1;
        
        if(index < questions.length) {
            setScore(prev => ({
                ...prev,
                [type]: (prev[type] || 0) + value
            }));
            setTotal(prev => prev + value);
            
            setQuestion(questions[index])
        
        } else {
            localStorage.setItem("score", JSON.stringify({
                total: total + value,
                ...score,
                [type]: (score[type] || 0) + value
            }));
            
            router.push("/results")
        }
    }

    if(loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <h1 className="font-carter-one">Chargement...</h1>
            </div>
        )
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <Question handleScore={handleIncrement} data={question} />
        </div>
    )
}