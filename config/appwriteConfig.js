import { Client, Storage } from 'appwrite';

export const appwriteConfig = {
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  storageId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID,
  endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
};

// Ensure environment variables are loaded
if (!appwriteConfig.projectId || !appwriteConfig.endpoint) {
  throw new Error("Missing Appwrite environment variables. Check your .env.local file.");
}

const client = new Client();
client.setEndpoint(appwriteConfig.endpoint).setProject(appwriteConfig.projectId); // ✅ Set endpoint first

export const storage = new Storage(client);
