import { NextResponse } from "next/server"

type BrochureDownloadPayload = {
  name: string
  phone: string
  email?: string
  property: string
  brochureType: string
  downloadUrl: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<BrochureDownloadPayload>

    if (!body?.name || !body?.phone || !body?.property || !body?.brochureType || !body?.downloadUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL
    if (!sheetsWebhookUrl) {
      return NextResponse.json({ error: "Sheets webhook URL not configured" }, { status: 500 })
    }

    // Prepare payload for Google Sheets
    const payload = {
      name: String(body.name).trim(),
      phone: String(body.phone).trim(),
      email: body.email ? String(body.email).trim() : undefined,
      lookingFor: `Brochure Download - ${body.property}`,
      budget: undefined,
      message: `Downloaded brochure: ${body.brochureType} for ${body.property}`,
      page: `brochure-download-${body.property.toLowerCase().replace(/\s+/g, '-')}`,
    }

    // Submit to Google Sheets first
    const res = await fetch(sheetsWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to record download request" }, { status: 502 })
    }

    // Return success with download URL
    return NextResponse.json({ 
      ok: true, 
      downloadUrl: body.downloadUrl,
      message: "Download request recorded successfully" 
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
