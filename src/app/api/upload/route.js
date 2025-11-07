// app/api/upload/route.js
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(req) {
  const formData = await req.formData()
  const file = formData.get("file")

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const fileName = Date.now() + "-" + file.name
  const filePath = path.join(process.cwd(), "public", "upload", fileName)

  await writeFile(filePath, buffer)

  return new Response(JSON.stringify({ url: "/upload/" + fileName }), {
    headers: { "Content-Type":"application/json" }
  })
}
