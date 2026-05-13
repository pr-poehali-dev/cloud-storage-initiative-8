import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта, сохраняет в БД (Simple Query Protocol)."""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, X-User-Id, X-Auth-Token, X-Session-Id",
        "Access-Control-Max-Age": "86400",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").replace("'", "''")
    phone = body.get("phone", "").replace("'", "''")
    email = body.get("email", "").replace("'", "''")
    company = body.get("company", "").replace("'", "''")
    package = body.get("package", "").replace("'", "''")
    message = body.get("message", "").replace("'", "''")

    sql = f"INSERT INTO leads (name, phone, email, company, package, message) VALUES ('{name}', '{phone}', '{email}', '{company}', '{package}', '{message}')"

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    conn.autocommit = True
    cur = conn.cursor()
    cur.execute(sql)
    cur.close()
    conn.close()

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }
