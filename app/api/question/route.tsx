import { NextResponse } from "next/server";

import database from "@/libs/database";
import QuestionType from "@/types/Question";

export async function GET() {
    try {
        const questions: QuestionType[] = await database.query<QuestionType>(
            `SELECT q.id, q.question, m.denomination as method, t.denomination as type, q.score FROM question q
            INNER JOIN method m ON m.id=q.method_id
            INNER JOIN type t ON t.id=q.type_id;`
        )
        return NextResponse.json(questions);
    } catch (e) {
        console.log(`[!][GET][STAT] - ${e}`)
        return NextResponse.json({ error: `Internal Error` }, { status: 500 })
    }
}