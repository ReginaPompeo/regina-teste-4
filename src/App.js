import React from 'react';
import './App.css';
import minhaFoto from '../src/images/regina-teste.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={minhaFoto} className="App-logo" alt="Minha Foto" style={{ maxWidth: '300px', borderRadius: '50%' }} />
        <p>
          Olá, eu sou a Regina!
        </p>
        <p>
          Tenho 20 anos e estou testando meu site.
        </p>
        <p>
          Em breve novidades!
        </p>
      </header>
    </div>
  );
}

export default App;
