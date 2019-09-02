import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)//首先执行
  }

   componentWillReceiveProps() {
    console.log('child')
  }

  handleClick() {
    const {delect, idx} = this.props
    delect(idx)
  }

  //父组件render执行时 子组件render也会执行

  //state props一旦改变，render会执行

  render() {
    const {content, test} = this.props
    return (
      <li onClick={this.handleClick}>
       {test} - {content}
      </li>
    )

    //Vue 虚拟DOM
    //原理 JSX -> createElement -> 虚拟DOM (JS对象) -> 真实DOM return React.createElement('div', {}, 'item')
    //虚拟DOM优点 ：1、性能提升 2、跨端应用实现  React Native  
  }
}

TodoItem.propTypes = {
  //test:PropTypes.isRequired,
  //content: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  delect: PropTypes.func,
  idx: PropTypes.number
}

TodoItem.defaultProps = {//默认值
  test: 'hello world!'
}

export default TodoItem