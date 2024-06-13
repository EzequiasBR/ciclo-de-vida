import React from "react";

export class Counter extends React.Component {
  constructor(){
   super();
   this.state={contador: 0};
   console.log('Constructor da class Counter foi chamado!')
  } 



  render() {
   console.log('Renderizado componente Counter...')
    return (
      <div>
        <h2>{this.state.contador}</h2>

        <button
          onClick={()=>{
            this.setState({contador: this.state.contador - 1 });
         }}
        >
         Diminuir
        </button>
        <button
         onClick={()=>{
            this.setState({contador: this.state.contador + 1 });
         }}
        >
         Aumentar
        </button>
      </div>
    );
  }

  componentDidMount(){
   console.log('componente foi montador ✔');
   document.addEventListener("scroll", this.consoleScroll)
  }

  componentWillUnmount(){
   console.log("componente Counter será desmontador...");
   document.removeEventListener("scroll", this.consoleScroll)
  }

  consoleScroll(){
   console.log('Rolando a Página...');
  }
}
