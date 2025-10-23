import { NextResponse } from "next/server";

import database from "@/libs/database";
import StatType from "@/types/Stat";

export async function GET() {
    try {
        const stat: StatType[] = await database.query<StatType>("SELECT * FROM stat;")
        return NextResponse.json(stat[0]);
    } catch (e) {
        console.log(`[!][GET][STAT] - ${e}`)
        return NextResponse.json({ error: `Internal Error` }, { status: 500 })
    }
}

export async function PUT() {
    try {
        await database.query("UPDATE stat SET count = count + 1")
        return NextResponse.json({ status: 200 });
    } catch (e) {
        console.log(`[!][GET][STAT] - ${e}`)
        return NextResponse.json({ error: `Internal Error`}, { status: 500 })
    }
}