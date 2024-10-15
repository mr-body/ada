import React from 'react';
import ReactDOM from 'react-dom';


const openForm = () => {
  alert("teste");
};

const App = () => {
  return (
    <div>
      <h1>Olá, React com Electron!</h1>
      <button onClick={openForm}>Abrir Formulário</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
