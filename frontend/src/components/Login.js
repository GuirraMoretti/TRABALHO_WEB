import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Aqui você faria a autenticação real. Exemplo básico:
    if (username === '' && password === '') {
      localStorage.setItem('authToken', '12345'); // Simulação de token
      navigate('/home'); // Redireciona para o menu principal
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Usuário:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
