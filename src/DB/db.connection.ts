import { MongoClient } from "mongodb";
import 'dotenv/config';

const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const dbName = process.env.MONGO_DB || "bancoTrabalho";

const client = new MongoClient(uri);
let cachedDb: import('mongodb').Db | null = null;

export const connectDB = async () => {
   if (!cachedDb) {
      await client.connect();
      cachedDb = client.db(dbName);
   }
   return cachedDb;
};

export const getDb = () => {
   if (!cachedDb) {
      throw new Error("Erro de conexão com o banco de dados durante a inicialização do aplicativo.");
   }
   return cachedDb;
};

export default getDb;
