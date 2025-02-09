import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://accounts:npg_cpHkrQfOq60o@ep-small-boat-a4ttrt9b-pooler.us-east-1.aws.neon.tech/ai-room-redesign?sslmode=require',
  },
});
