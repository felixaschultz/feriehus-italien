import type { APIRoute } from "astro";

export const prerender = false;

const TO_ADDRESSES = ["Lbejendomme@gmail.com", "info@flytteboxen.dk"];
const FROM_ADDRESS = "Casa Santa Libera <kontakt@villetta.dk>";

export const POST: APIRoute = async ({ request, locals }) => {
  const RESEND_API_KEY =
    locals.runtime?.env?.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    return json({ error: "Email-tjenesten er ikke konfigureret" }, 503);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Ugyldig forespørgsel" }, 400);
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const dates = String(body.dates ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return json({ error: "Udfyld venligst navn, e-mail og besked" }, 422);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Ugyldig e-mailadresse" }, 422);
  }

  const textBody = [
    `Navn: ${name}`,
    `E-mail: ${email}`,
    dates ? `Ønskede datoer: ${dates}` : null,
    "",
    `Besked:`,
    message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: TO_ADDRESSES,
      reply_to: email,
      subject: `Ny henvendelse fra ${name} — Casa Santa Libera`,
      text: textBody,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error("Resend API error:", err);
    return json({ error: "Beskeden kunne ikke sendes — prøv igen" }, 502);
  }

  return json({ ok: true }, 200);
};

function json(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
