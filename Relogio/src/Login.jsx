import { useState } from 'react';
import PainelPrincipal from './PainelPrincipal';


function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return <PainelPrincipal />;
    }

    return (
        <div>
            <div className="login">
                <div className="email">
                    <form onSubmit={handleLogin}>
                        <input type="email" name="email" id="email" placeholder="E-mail" required />
                        <input type="password" name="senha" id="senha" placeholder="Senha" required />
                        <div className="botaoEntrar">
                            <button type="submit">Entrar</button>
                        </div>
                    </form>
                </div>
                <div className="marcador">
                    <form>
                        <label>
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            Lembrar senha
                        </label>
                    </form>
                    <div className="esqueceuSenha">
                        <a href="esqueceuSenha.html" target="_blank">Esqueceu a senha?</a>
                    </div>
                    <div className="semConta">
                        <br />
                        <br />
                        <h5>Não possui conta?</h5>
                    </div>
                    <div className="criarConta">
                        <a href="criarConta.html" target="_blank">Criar conta?</a>
                    </div>
                    <div className="foto">
                        <img src="sementeCafe.png" alt="" width="184" height="184" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;