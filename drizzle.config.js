import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://accounts:npg_AQun3KomzlG8@ep-proud-queen-a8lkrjkp-pooler.eastus2.azure.neon.tech/AI-Content-Generator?sslmode=require',
  },
});
