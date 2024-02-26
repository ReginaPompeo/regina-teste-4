import React from 'react';

function App() {
  return (
    <div className="container">
      <h1>Olá, eu sou a Regina!</h1>
      <p>Tenho [anos] e estou testando meu site.</p>
      <div className="image-container">
        <img src="sua_foto.jpg" alt="Foto da Regina" style={{ maxWidth: '300px', borderRadius: '50%' }} />
        <p>Em breve novidades!</p>
      </div>
    </div>
  );
}

export default App;
