import { NextResponse } from "next/server";

import database from "@/libs/database";
import { MaxScoreRequestType, ScoreType } from "@/types/Question";

export async function GET() {
    try {
        const types: MaxScoreRequestType[] = await database.query<MaxScoreRequestType>(
            `SELECT t.denomination AS type,
            SUM(
                (
                SELECT MAX(CAST(value AS UNSIGNED))
                FROM JSON_TABLE(q.score, '$.*' COLUMNS(value VARCHAR(255) PATH '$')) AS vals
                )
            ) AS max_score
            FROM question q
            JOIN type t ON q.type_id = t.id
            GROUP BY t.id, t.denomination
            ORDER BY t.id;`
        );

        const res: ScoreType = {}
        types.forEach(type => {
            res[type.type] = type.max_score;
        });

        return NextResponse.json(res);
    } catch (e) {
        console.log(`[!][GET][STAT] - ${e}`)
        return NextResponse.json({ error: `Internal Error` }, { status: 500 })
    }
}