import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class TodoItem extends Component {

  constructor(props) {//首先执行
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  componentDidMount() {
    //这里写ajax请求 只执行一次
    axios.get('/api/todolist')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      alert(err)
    })
  }


  //父组件render执行时 子组件render也会执行

  //state props一旦改变，render会执行

  render() {

    //console.log("child render")

    const { content } = this.props

    return (
      <li onClick={this.handleClick}>
        {content}
      </li>
    )

    //Vue 虚拟DOM
    //原理 JSX -> createElement -> 虚拟DOM (JS对象) -> 真实DOM return React.createElement('div', {}, 'item')
    //虚拟DOM优点 ：1、性能提升 2、跨端应用实现  React Native  
  }


  handleClick() {
    const { delect, idx } = this.props
    delect(idx)
  }
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  delect: PropTypes.func,
  idx: PropTypes.number
}

export default TodoItem