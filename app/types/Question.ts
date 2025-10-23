export type ScoreType = {
    [key: string]: number
}
export type QuestionType = {
    id: number
    type: string,
    question: string,
    method: string,
    score: ScoreType
}

export type MaxScoreRequestType = {
    type: string, 
    max_score: number
}

export type QuestionProps = {
    data: QuestionType,
    handleScore: (value: number, type: string) => void
}

export default QuestionType;