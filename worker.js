const USERNAME = "admin";
const PASSWORD = "admin";
const SECRET = "borela-preview-2026-secret";

const LOGIN_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Borela — Preview Access</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:"Public Sans",system-ui,sans-serif;background:#fbf9f4;display:flex;align-items:center;justify-content:center;min-height:100vh}
    .box{border:1px solid #C8C5BE;padding:40px;width:100%;max-width:360px;background:#F4F2ED}
    .logo{font-weight:900;font-size:18px;letter-spacing:.1em;text-transform:uppercase;margin-bottom:28px;color:#0A0A0A}
    .logo span{color:#1A48C2}
    label{display:block;font-family:monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#4A4A4A;margin-bottom:6px}
    input[type=text],input[type=password]{width:100%;border:1px solid #C8C5BE;padding:10px 14px;font-size:14px;background:#fbf9f4;color:#0A0A0A;margin-bottom:16px;outline:none}
    input:focus{border-color:#1A48C2}
    button{width:100%;background:#1A48C2;color:#fff;border:none;padding:12px;font-family:monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;font-weight:700}
    button:hover{background:#1338A0}
    .error{color:#b8351c;font-size:12px;margin-bottom:14px;font-family:monospace}
    .note{margin-top:20px;font-size:11px;color:#6E716E;font-family:monospace;text-align:center}
  </style>
</head>
<body>
  <div class="box">
    <div class="logo">BORELA<span>.</span></div>
    <form method="POST" action="/__login">
      {{ERROR}}
      <label for="u">Username</label>
      <input id="u" type="text" name="username" autocomplete="username" autofocus />
      <label for="p">Password</label>
      <input id="p" type="password" name="password" autocomplete="current-password" />
      <input type="hidden" name="to" value="{{TO}}" />
      <button type="submit">Sign in</button>
    </form>
    <p class="note">Preview — not for public distribution</p>
  </div>
</body>
</html>`;

async function makeToken(secret) {
  const ts = Date.now().toString();
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(ts));
  const hex = [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
  return `${ts}.${hex}`;
}

async function checkToken(token, secret) {
  if (!token || !token.includes(".")) return false;
  const dot = token.indexOf(".");
  const ts = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (Date.now() - parseInt(ts) > 86400000) return false; // 24h
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["verify"]
  );
  const sigBytes = new Uint8Array(sig.match(/.{2}/g).map(b => parseInt(b, 16)));
  return crypto.subtle.verify("HMAC", key, sigBytes, new TextEncoder().encode(ts));
}

const NOINDEX = "noindex, nofollow";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cookie = request.headers.get("Cookie") || "";
    const match = cookie.match(/ba=([^;]+)/);
    const authed = match ? await checkToken(decodeURIComponent(match[1]), SECRET) : false;

    // Handle login form submission
    if (request.method === "POST" && url.pathname === "/__login") {
      const data = await request.formData();
      const to = data.get("to") || "/";
      if (data.get("username") === USERNAME && data.get("password") === PASSWORD) {
        const token = await makeToken(SECRET);
        return new Response(null, {
          status: 302,
          headers: {
            "Location": to,
            "Set-Cookie": `ba=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`,
            "X-Robots-Tag": NOINDEX,
          },
        });
      }
      return new Response(
        LOGIN_HTML.replace("{{ERROR}}", '<p class="error">Wrong username or password.</p>').replace("{{TO}}", to),
        { status: 200, headers: { "Content-Type": "text/html;charset=UTF-8", "X-Robots-Tag": NOINDEX, "Cache-Control": "no-store" } }
      );
    }

    // Authenticated — serve asset
    if (authed) {
      const res = await env.ASSETS.fetch(request);
      const r = new Response(res.body, res);
      r.headers.set("X-Robots-Tag", NOINDEX);
      return r;
    }

    // Not authenticated — show login page
    return new Response(
      LOGIN_HTML.replace("{{ERROR}}", "").replace("{{TO}}", url.pathname + url.search),
      { status: 200, headers: { "Content-Type": "text/html;charset=UTF-8", "Cache-Control": "no-store", "X-Robots-Tag": NOINDEX } }
    );
  },
};
