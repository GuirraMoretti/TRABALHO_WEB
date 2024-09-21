import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // Verifique se o usuário está autenticado ao carregar a página
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login'); // Se não estiver autenticado, redireciona para login
    }
  }, [navigate]);
}

export default Home;
