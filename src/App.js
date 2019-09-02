import React from 'react';
import { Component, Fragment } from 'react'; //占位Fragment
import './App.css'
import ToodItem from './tooditem'

class App extends Component {

  constructor(props) {
    super(props)//调用父类

    this.state = {
      inputVal: 'hello',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDelect = this.handleDelect.bind(this)

  }

  render() {
    return (
      <Fragment>
        <label htmlFor="insertArea">输入内容</label>{/**不能用for */}
        <input
          id="insertArea"
          className='input'
          value={this.state.inputVal}
          onChange={this.handleInputChange.bind(this)}
          />
        <button onClick={() => { this.handleBtnClick() }}>提交</button>
        <ul ref={(ul) => this.ul = ul}>
          {
            this.getToodoItem()
          }
        </ul>
      </Fragment>
    )
  }


  handleInputChange(e) {
    // this.setState({
    //   inputVal: e.target.value
    // })
    const val = e.target.value
    // const val = this.input.value
    this.setState(() => ({
      inputVal: val
    }))
  }

  handleBtnClick(e) {
    //this.setState是一个异步函数
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputVal],
      inputVal: ''
    }), () => {
      //console.log(this.ul.querySelectorAll('li').length)
    })
    // this.setState({
    //   list: [...this.state.list, this.state.inputVal],
    //   inputVal: ''
    // })

  }

  handleDelect(index) {
    // const list = [...this.state.list]//拷贝 不建议直接修改state
    // list.splice(index, 1)
    // this.setState({
    //   list: list
    // })

    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }

  getToodoItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          <ToodItem
            key={index}
            content={item} // 传内容
            idx={index}//向子组件传值 下标
            delect={this.handleDelect} //传方法
          />
        )
      })
    )
  }
}


export default App;
