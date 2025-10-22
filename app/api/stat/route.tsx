import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";

import StatType from "@/types/Stat";

const statFile = "stats.json";
const statPath = path.join(process.cwd(), "storage", statFile);

const defaultStat: StatType = {
    count: 0
}

export async function GET() {
    try {
        let json: StatType = defaultStat; 
        
        if(fs.existsSync(statPath)) {
            const content = fs.readFileSync(statPath, "utf-8");
            json = JSON.parse(content)
        }

        return NextResponse.json(json);
    } catch (e) {
        console.log(`[!][GET][STAT] - ${e}`)
        return NextResponse.json(defaultStat)
    }
}

export async function POST() {
    try {
        let json: StatType = defaultStat
        if(fs.existsSync(statPath)) {
            const content = fs.readFileSync(statPath, "utf-8");
            json = JSON.parse(content)
        } else {
            fs.mkdirSync(statPath.replace(statFile, ""), { recursive: true });
        }

        json.count++;
        fs.writeFileSync(statPath, JSON.stringify(json));
        
        return NextResponse.json(json)
    } catch (e) {
        console.log(`[!][POST][STAT] - ${e}`)
        return NextResponse.json({ error: "Internal Error" }, { status: 500 })
    }
}