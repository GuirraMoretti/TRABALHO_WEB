import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../assets/css/Layout.css'; // Importar seu CSS aqui

const Layout = () => {
  return (
    <div className="home-container">
      <header className="topbar">
        <h1>Sistema de Armazenamento</h1>
        <nav>
          <ul>
            <li><Link to="/cadastro">Cadastrar Item</Link></li>
            <li><Link to="/listagem">Listar Itens</Link></li>
            <li><Link to="/relatorio-mensal">Relatório Mensal</Link></li>
            <li><Link to="/relatorio-geral">Relatório Geral</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet /> {/* Renderiza os componentes de rota */}
      </main>
    </div>
  );
};

export default Layout;
