// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Ajuste o caminho conforme necessário
import Home from './components/Home';
import Login from './components/Login';
import Listagem from './components/Listagem';
import CadastroItem from './components/CadastroItem';
import RelatorioMensal from './components/ItemsReport';
import RelatorioGeral from './components/GeneralReport';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="cadastro" element={<CadastroItem />} />
          <Route path="listagem" element={<Listagem />} />
          <Route path='relatorio-mensal' element={<RelatorioMensal />} />
          <Route path='relatorio-geral' element={<RelatorioGeral />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
