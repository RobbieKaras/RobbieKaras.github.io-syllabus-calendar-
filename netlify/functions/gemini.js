export default async (req) => {
  try {
    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const API_KEY = process.env.MY_API_KEY;
    if (!API_KEY) {
      return new Response("Missing MY_API_KEY env var", { status: 500 });
    }

    const body = await req.json();

    // Your frontend will send { payload }, where payload is the Gemini request JSON
    const payload = body?.payload;
    if (!payload) {
      return new Response("Missing payload", { status: 400 });
    }

    const endpoint =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent";

    const upstream = await fetch(`${endpoint}?key=${encodeURIComponent(API_KEY)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await upstream.text();

    return new Response(text, {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("content-type") || "application/json",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: { message: err?.message || "Server error" } }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
