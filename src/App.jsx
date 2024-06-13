import React from "react";
import { Counter } from "./components/Counter/Counter";

export class App extends React.Component {
  
  constructor(){
    super();
    this.state={showCounter: false}
  }
  render() {
    return (
      <>
        <h1>Ciclo de vida do React</h1>
        
        <button onClick={()=>{
          this.setState({showCounter: !this.state.showCounter})
        }}>
          {this.state.showCounter ? 'Remover contador' : 'Mostrar Contador'}
        </button>

        {this.state.showCounter ? <Counter /> : null}
        
      </>
    );
  }
}
