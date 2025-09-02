export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Basic field normalization
    const payload = {
      name: String(body?.name || ""),
      email: String(body?.email || ""),
      company: String(body?.company || ""),
      role: String(body?.role || ""),
      message: String(body?.message || ""),
      source: String(body?.source || "cta-join"),
      submittedAt: new Date().toISOString(),
    }

    const webhook = process.env.N8N_WEBHOOK_URL

    if (webhook) {
      const resp = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!resp.ok) {
        return new Response(JSON.stringify({ ok: false, error: "Webhook rejected" }), { status: 502 })
      }
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "Invalid payload" }), { status: 400 })
  }
}
