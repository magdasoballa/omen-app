import React, { Component } from "react";
 
class Main extends Component {
    state = {
        value:'' ,
        content:'',
        wishes: ["wróżba 1" , "wróżba 2", "wróżba 3" ]

    }

handleChange = e => {
    this.setState({
        value: e.target.value
    })
}

handlerShow = () => {
    let item = this.state.wishes[Math.floor(Math.random() * this.state.wishes.length)];
    this.setState({
        content: item
    })
}

handleAdd = () => {
    this.state.wishes.push(this.state.value)
    this.setState({
        value: ''
    })
}

  render() {
    return (
        <>
         <button onClick={this.handlerShow}>Zobacz wróżbę</button> <br/>
          <input value={this.state.value} onChange={this.handleChange}></input>   
          <button onClick={this.handleAdd}>Dodaj wróżbę</button> <br />
          <span>{this.state.content}</span>
        </>
    );
  }
}

export default Main;