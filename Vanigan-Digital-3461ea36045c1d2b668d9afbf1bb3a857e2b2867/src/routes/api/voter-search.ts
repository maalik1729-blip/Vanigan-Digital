import { createFileRoute } from "@tanstack/react-router";
import mysql from "mysql2/promise";
import fs from "fs/promises";
import path from "path";

const DB_CONFIG = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "voter_db",
};

async function getConnection() {
  return mysql.createConnection(DB_CONFIG);
}

export const APIRoute = createFileRoute("/api/voter-search" as any)({
  server: {
    handlers: {
      GET: async ({ request }: { request: Request }) => {
        const url = new URL(request.url);
    const epic = url.searchParams.get("epic")?.trim().toUpperCase();
    const mobile = url.searchParams.get("mobile")?.trim();
    const name = url.searchParams.get("name")?.trim();

    if (!epic && !mobile && !name) {
      return Response.json({ error: "Provide epic, mobile, or name" }, { status: 400 });
    }

    let conn;
    try {
      conn = await getConnection();

      let query = "SELECT * FROM ass_25 WHERE 1=1";
      const params: string[] = [];

      if (epic) {
        query += " AND EPIC_NO = ?";
        params.push(epic);
      }
      if (mobile) {
        query += " AND MOBILE_NUMBER = ?";
        params.push(mobile);
      }
      if (name && !epic && !mobile) {
        query += " AND VOTER_NAME LIKE ?";
        params.push(`%${name}%`);
      }

      query += " LIMIT 5";
      const [rows] = await conn.execute(query, params);
      return Response.json({ voters: rows });
    } catch (dbErr) {
      console.warn("[voter-search] MySQL connection failed, falling back to local JSON file:", (dbErr as Error).message);
      
      // Fallback to local file voters.json
      try {
        const filePath = path.resolve(process.cwd(), "src/data/voters.json");
        const fileData = await fs.readFile(filePath, "utf-8");
        const voters = JSON.parse(fileData);

        let filtered = voters;

        if (epic) {
          filtered = filtered.filter((v: any) => v.EPIC_NO?.toUpperCase() === epic);
        }
        if (mobile) {
          filtered = filtered.filter((v: any) => v.MOBILE_NUMBER === mobile);
        }
        if (name && !epic && !mobile) {
          const lowerName = name.toLowerCase();
          filtered = filtered.filter((v: any) => v.VOTER_NAME?.toLowerCase().includes(lowerName));
        }

        return Response.json({ voters: filtered.slice(0, 5) });
      } catch (fileErr: unknown) {
        const msg = fileErr instanceof Error ? fileErr.message : String(fileErr);
        return Response.json({ error: "DB and File errors: " + msg }, { status: 500 });
      }
    } finally {
      if (conn) conn.end();
    }
  },
},
},
});
