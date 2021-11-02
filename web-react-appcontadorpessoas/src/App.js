import React, { Component } from 'react';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    }
    this.decrementar = this.decrementar.bind(this)
    this.incrementar = this.incrementar.bind(this)
  }

  decrementar = () =>{
    this.state.contador === 0 ? alert('no céu tem pão') 
    : this.setState({contador: this.state.contador - 1})
  }

  incrementar = () =>{
    if (this.state.contador === 0) {
      
    }
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render(){
    return(
      <div className="container">
      <header className="App-header">
        <h2>Contador de pessoas</h2>
      </header>
      <div className="contador">
      <button onClick={this.decrementar} type="button" class="btn btn-secondary btn-lg" value="-">-</button>
      <h1 class="numContador">{this.state.contador}</h1>
      <button onClick={this.incrementar} type="button" class="btn btn-primary btn-lg" value="+">+</button>
      </div>

    </div>
    )
  }
}

