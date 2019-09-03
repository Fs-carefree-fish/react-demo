import React from 'react';
import { Component, Fragment } from 'react'; //占位Fragment
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)//调用父类
    this.state = {
      show: true
    }
    this.handleToggole = this.handleToggole.bind(this)
  }

  render() {
    return (
      <Fragment>
        <h1 className={this.state.show ? 'show' : 'hide'}>hello!!!</h1>
        <button onClick={this.handleToggole}>按下</button>
      </Fragment>
    )
  }

  handleToggole() {
    this.setState({
      show:!this.state.show
    })
  }
}


export default App;
