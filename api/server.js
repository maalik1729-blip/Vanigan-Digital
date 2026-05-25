import server from "../dist/server/server.js";
import { Readable } from "node:stream";

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = new URL(req.url, `${protocol}://${host}`).href;

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach(v => headers.append(key, v));
        } else {
          headers.set(key, value);
        }
      }
    }

    const body = ['GET', 'HEAD'].includes(req.method) ? null : req;
    const request = new Request(url, {
      method: req.method,
      headers,
      body,
      duplex: 'half'
    });

    const webResponse = await server.fetch(request);

    res.statusCode = webResponse.status;
    res.statusMessage = webResponse.statusText;
    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (webResponse.body) {
      Readable.fromWeb(webResponse.body).pipe(res);
    } else {
      res.end();
    }
  } catch (error) {
    console.error("Error handling request in api/server:", error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }
}
