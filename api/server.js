import server from "../dist/server/server.js";

export default async function handler(request) {
  try {
    return await server.fetch(request);
  } catch (error) {
    console.error("Error handling request in api/server:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
