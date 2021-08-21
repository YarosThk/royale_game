import React from "react"

export default class Counter extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState(
            {counter : this.state.counter+1}
        )
    }
    
    decrement() {
        this.setState(
            { counter: this.state.counter-1}
        )
    }

    componentDidMount(){
        console.log("Did Mount! After Render")
        console.log("------------------")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Should it Update?")
        console.log(nextProps.ignoreProp)
        console.log(this.props.ignoreProp)
        console.log(nextState.ignoreProp)
        if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp){
            console.log("Should it Update? -- DO NOT RENDER")
            return false
        }
        console.log("Should it Update? -- DO RENDER")
        return true
    }

    render(){
        console.log("Component Rendered!")
        console.log("------------------")
        return(
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        console.log("Did Update!")
        console.log("------------------")
    }

    componentWillUnmount() {
        console.log("Component will unmount!")
        console.log("------------------")
    }
}