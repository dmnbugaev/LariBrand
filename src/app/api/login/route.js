import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { password } = await req.json()

    if (password === process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ ok: false }, { status: 401 })
    
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}