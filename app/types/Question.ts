export type ScoreType = {
    [key: string]: number
}
export type QuestionType = {
    type: string,
    question: string,
    method: string,
    score: ScoreType
}

export type QuestionProps = {
    data: QuestionType,
    handleScore: (value: number, type: string) => void
}

export default QuestionType;