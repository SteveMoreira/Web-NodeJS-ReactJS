import React,{ Component,text } from 'react';
import './App.css';
import Foto from './Foto';
import Dados from './Dados';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App Meu Perfil</h1>
        <Foto />
        
        <h2>Dados Pessoais:</h2>
        <p>Nome:Steve Moreira</p>
        <p>Idade:30 anos</p>
        <p>Status:Casado</p>
        
        <h2> Formação:</h2>
        <p> Analise e Desenvolvimento de Sistemas</p>

        <h2> Experiência:</h2>
        <p>Tecnode - Desenvolvedor de sistemas</p>

        <h2> Projetos:</h2>
        <p>React-Native</p>
        <p>React-Js</p>

        
      </div>
    );
  }
}
export default App;