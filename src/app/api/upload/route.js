import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

export async function POST(req) {
  try {
    const formData = await req.formData()
    const file = formData.get("file")

    if (!file) {
      return NextResponse.json({ error: "No file" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Безопасное имя файла
    const fileName = Date.now() + "-" + file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
    const filePath = path.join(process.cwd(), "public", "upload", fileName)

    // Создаем папку если не существует
    await fs.mkdir(path.dirname(filePath), { recursive: true })
    
    await fs.writeFile(filePath, buffer)

    return NextResponse.json({ url: "/upload/" + fileName })
    
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}