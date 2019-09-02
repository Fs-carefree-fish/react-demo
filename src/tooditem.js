import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)//首先执行
  }

  handleClick() {
    const {delect, idx} = this.props
   delect(idx)
  }

  render() {
    const {content} = this.props
    return (
      <li onClick={this.handleClick}>
        {content}
      </li>
    )
  }
}

export default TodoItem