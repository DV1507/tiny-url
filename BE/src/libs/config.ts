import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  FRONTEND_URL,
} = process.env;
