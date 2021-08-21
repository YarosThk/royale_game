import './App.css';
import React from "react"
import Counter from "./counter"
import Chamaleon from "./Chamaleon"


export default class App extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      mount: true,
      ignoreProp : 0
    }

    this.mountCounter = this.mountCounter.bind(this)
    this.unmountCounter = this.unmountCounter.bind(this)
    this.ignoreProp = this.ignoreProp.bind(this)
  }

  mountCounter(){
    this.setState(
      { mount: true }
      )
  }

  unmountCounter() {
    this.setState(
      { mount: false }
    )
  }

  ignoreProp(){
    this.setState(
      {ignoreProp: Math.random()}
    )
  }

  render(){
    return(
      <div className="App">
        <button onClick={this.mountCounter}>Mount</button>
        <button onClick={this.unmountCounter}>Unmount</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        {(this.state.mount ? <Counter ignoreProp= {this.state.ignoreProp}/> : null)}
        <Chamaleon/>
      </div>
    )
  }
}

