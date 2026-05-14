const USERNAME = "admin";
const PASSWORD = "admin";

export default {
  async fetch(request, env) {
    const auth = request.headers.get("Authorization");

    if (auth && auth.startsWith("Basic ")) {
      const decoded = atob(auth.slice(6));
      const colon = decoded.indexOf(":");
      if (colon !== -1) {
        const user = decoded.slice(0, colon);
        const pass = decoded.slice(colon + 1);
        if (user === USERNAME && pass === PASSWORD) {
          const response = await env.ASSETS.fetch(request);
          const r = new Response(response.body, response);
          r.headers.set("X-Robots-Tag", "noindex, nofollow");
          return r;
        }
      }
    }

    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Borela Preview", charset="UTF-8"',
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  },
};
