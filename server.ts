import express from "express";
import cors from "cors";
import router from "./routes"
import { connectDB } from "./src/DB/db.connection";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

connectDB().catch((err) => {
  console.error("Erro ao conectar ao banco de dados", err);
});

export { app };
