import QuestionType from "@/types/Question";

export const questions: Array<QuestionType> = [
    {
        type: "morale",
        question: "Avez-vous déjà ri du malheur de quelqu'un ?",
        method: "classic",
        score: {
            yes: 2,
            no: 0
        }
    },
    {
        type: "sex",
        question: "Combien de fois vous êtes vous déjà fait arrêter ?",
        method: "choice",
        score: {
            0: 0,
            1: 1,
            2: 3,
            3: 5,
            4: 7,
            Plus: 10
        }
    },
    {
        type: "morale",
        question: "As-tu déjà mangé de la terre",
        method: "classic",
        score: {
            yes: 5,
            no: 0
        }
    }
]

export default questions;