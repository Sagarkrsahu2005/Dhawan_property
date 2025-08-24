import { NextResponse } from "next/server"

type InquiryPayload = {
  name: string
  phone: string
  email?: string
  lookingFor?: string
  budget?: string
  message?: string
  page?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<InquiryPayload>

    if (!body?.name || !body?.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL
    if (!sheetsWebhookUrl) {
      return NextResponse.json({ error: "Sheets webhook URL not configured" }, { status: 500 })
    }

    const payload: InquiryPayload = {
      name: String(body.name).trim(),
      phone: String(body.phone).trim(),
      email: body.email ? String(body.email).trim() : undefined,
      lookingFor: body.lookingFor ? String(body.lookingFor) : undefined,
      budget: body.budget ? String(body.budget) : undefined,
      message: body.message ? String(body.message) : undefined,
      page: body.page ? String(body.page) : request.headers.get("referer") || "home",
    }

    const res = await fetch(sheetsWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // If Apps Script needs mode: no-cors, remove the JSON parsing below and always return ok
    })

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to forward to Google Sheets" }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}


