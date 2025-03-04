import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";  // Agora a importação está correta!

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("Configuração do banco:");
console.log("Usuário:", process.env.DB_USER);
console.log("Host:", process.env.DB_HOST);
console.log("Banco:", process.env.DB_NAME);
console.log("Porta:", process.env.DB_PORT);
console.log("Senha:", typeof process.env.DB_PASS); // Verifica o tipo da senha

// Rota de login
app.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    try {
        const result = await db.query("SELECT * FROM usuarios WHERE email = $1 AND senha = $2", [email, senha]);
        if (result.rows.length > 0) {
            res.json({ success: true });
        } else {
            res.status(401).json({ message: "Credenciais inválidas" });
        }
    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ message: "Erro no servidor" });
    }
});

app.listen(5000, () => {
    console.log("🚀 Servidor rodando na porta 5000");
});
