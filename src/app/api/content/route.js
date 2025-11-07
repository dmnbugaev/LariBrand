import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

const file = path.join(process.cwd(), "content", "content.json")

export async function GET() {
  const text = await fs.readFile(file, "utf8")
  return NextResponse.json(JSON.parse(text))
}

export async function POST(req) {
  const body = await req.json()
  await fs.writeFile(file, JSON.stringify(body, null, 2), "utf8")
  return NextResponse.json({ ok: true })
}
