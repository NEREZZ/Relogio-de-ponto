import { useState } from "react";
import PainelPrincipal from "./PainelPrincipal.jsx";

function LoginPrincipal() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [erro, setErro] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        setErro("");

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            const data = await response.json();
            if (response.ok) {
                setIsLoggedIn(true);
            } else {
                setErro(data.message || "Erro ao fazer login");
            }
        } catch (error) {
            setErro("Erro de conexão com o servidor");
        }
    };

    if (isLoggedIn) {
        return <PainelPrincipal />;
    }

    return (
        <div>
            <div className="login">
                <form onSubmit={handleLogin}>
                    <div className="email">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                           
                        />
                    </div>
                    <div className="senha">
                        <input
                            type="password"
                            name="senha"
                            id="senha"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                           
                        />
                    </div>
                    {erro && <p style={{ color: "red" }}>{erro}</p>}
                    <div className="botaoEntrar">
                        <button type="submit">Entrar</button>
                    </div>
                </form>
            </div>
            <div className="marcador">
                <form>
                    <label htmlFor="checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        Lembrar senha
                    </label>
                </form>
                <div className="esqueceuSenha">
                    <a href="/esqueceuSenha" target="_blank">Esqueceu a senha?</a>
                </div>
                <div className="semConta">
                    <h5>Não possui conta?</h5>
                </div>
                <div className="criarConta">
                    <a href="/criarConta" target="_blank">Criar conta?</a>
                </div>
                <div className="foto">
                    <img src="sementeCafe.png" alt="" width="184" height="184" />
                </div>
            </div>
        </div>
    );
}

export default LoginPrincipal;