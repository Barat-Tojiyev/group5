import React,{Component} from "react";

 class App1 extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            name:'Xadicha'
        }
    }
    render(){
        let onPluss=()=>{
            this.setState({count:this.state.count+1})
        }
        let onName=(e)=>{    
            this.setState({name:e.target.value})
        }
        return(
            <div>
                <h1>Class Component</h1>
                <h2>{this.state.count}</h2>
                <button onClick={onPluss}>pluss</button>
                <h3>This is name:{this.state.name} </h3>
                <input onChange={onName} type="text" />
            </div>
        )
    }
}
export default App1