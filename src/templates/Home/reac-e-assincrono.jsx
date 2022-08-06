import { Component } from 'react'

//O resct é assincrono
export class Teste extends Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(
      //recebe uma callback no primeiro argumento com esses argumentos
      (estado_anterior, props_anterior) => {
        return { counter: estado_anterior + props_anterior }
      },
      () => console.log(this.state.counter)
    )
    //aqui vai retornar o valor não alterado porque react é
    //assincrono por isso encima no set state no segundo argumento
    //tem um callback function pra executar após a renderização
    //completa do dom virtual
    console.log(this.state.counter)
  }

  render() {
    return (
      <div className='container'>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}
