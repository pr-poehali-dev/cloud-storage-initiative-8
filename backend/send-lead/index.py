import json
import os
import smtplib
import psycopg2
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта, сохраняет в БД и отправляет уведомление на email."""
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

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    conn.autocommit = True
    cur = conn.cursor()
    cur.execute(
        f"INSERT INTO leads (name, phone, email, company, package, message) VALUES ('{name}', '{phone}', '{email}', '{company}', '{package}', '{message}')"
    )
    cur.close()
    conn.close()

    recipient = os.environ.get("EMAIL_RECIPIENT", "")
    smtp_host = os.environ.get("SMTP_HOST", "")
    smtp_user = os.environ.get("SMTP_USER", "")
    smtp_password = os.environ.get("SMTP_PASSWORD", "")

    if recipient and smtp_host and smtp_user and smtp_password:
        lines = [f"Имя: {name}", f"Телефон: {phone}"]
        if email:
            lines.append(f"Email: {email}")
        if company:
            lines.append(f"Компания: {company}")
        if package:
            lines.append(f"Тариф: {package}")
        if message:
            lines.append(f"Сообщение: {message}")

        msg = MIMEMultipart()
        msg["Subject"] = f"Новая заявка с сайта — {name}"
        msg["From"] = smtp_user
        msg["To"] = recipient
        msg.attach(MIMEText("\n".join(lines), "plain", "utf-8"))

        with smtplib.SMTP(smtp_host, 587) as smtp:
            smtp.starttls()
            smtp.login(smtp_user, smtp_password)
            smtp.sendmail(smtp_user, [recipient], msg.as_string())

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }