CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  company TEXT,
  package TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);