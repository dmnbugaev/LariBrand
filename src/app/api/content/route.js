import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

const file = path.join(process.cwd(), "content", "content.json")

export async function GET() {
  try {
    const text = await fs.readFile(file, "utf8")
    return NextResponse.json(JSON.parse(text))
  } catch (error) {
    // Если файла нет - создаем пустой
    if (error.code === 'ENOENT') {
      await fs.writeFile(file, JSON.stringify({}), "utf8")
      return NextResponse.json({})
    }
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    await fs.writeFile(file, JSON.stringify(body, null, 2), "utf8")
    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}