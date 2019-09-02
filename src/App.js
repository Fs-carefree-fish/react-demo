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

  componentWillMount() {
    console.log("即将被挂载")
  }

  componentDidMount() {
    console.log("挂载后")
  }

  // states 和 prop变化
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true //组件更不更新？
    //return false 后面的函数否不执行
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  // //组件从父组件接收参数 只要父组件的render执行了 就执行
  // componentWillReceiveProps() {
  //   console.log('child')
  // }

 componentWillUnmount () {
   console.log('componentWillUnmount')
 }


  render() {
    console.log("render")
    return (
      <Fragment>
        <label htmlFor="insertArea">输入内容</label>{/**不能用for */}
        <input
          id="insertArea"
          className='input'
          value={this.state.inputVal}
          onChange={this.handleInputChange.bind(this)}
          ref={(input) => this.input = input} />
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
    //const val = e.target.value
    const val = this.input.value
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
      console.log(this.ul.querySelectorAll('li').length)
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
