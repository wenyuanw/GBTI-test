const allowedPaths = [
  "/",
  "/index.html"
];

function canServe(pathname) {
  if (allowedPaths.includes(pathname)) return true;
  return pathname.startsWith("/image/");
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (!canServe(url.pathname)) {
      return new Response("Not Found", { status: 404 });
    }

    return env.ASSETS.fetch(request);
  }
};
