import React, { Component } from 'react';
import './App.css';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      resultado: '',
    }

    this.calcular = this.calcular.bind(this)

  }

  calcular = () => {

    if ((this.state.num1 === '') || (this.state.num2 === '')) {
      alert('Preencha os dois campos');
      return;
    } else {
      var r = this.state.num1 * this.state.num2
      this.setState({ resultado:'Resultado é ' + r})
    }
  }
  
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Multiplicador de Numeros</h1>
        </div>

        <div className="square">
          <div className="form">
            <div className="form-group">
              <label>Numero 1</label>
              <input onChange={ (e) => this.setState({ num1: e.target.value}) } value={this.state.num1} type="text" className="inpuText" />
            </div>
            <div className="form-group">
              <label>Numero 2</label>
              <input onChange={ (e) => this.setState({ num2: e.target.value}) } value={this.state.num2} type="text" className="inpuText" />
            </div>
          </div>
          <button type="submit" className="btn" onClick={this.calcular}>Multiplicar</button>
          <div className="resultado">
            <p className="textoResultado">{this.state.resultado}</p>
          </div>
        </div>
      </div>
    )
  }
}

