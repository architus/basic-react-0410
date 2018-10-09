import React, { Component } from 'react'
import buttonDecorators from '../decorators/button-list'
import Comment from './comment'

class CommentList extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.props.isOpen ? 'close' : 'open'}
        </button>
        {this.props.isOpen && this.body}
      </div>
    )
  }

  handleClick = () => {
    this.props.toggleCommentOpen(!this.props.isOpen)
  }

  get body() {
    return (
      <div>
        <ul>{this.items}</ul>
      </div>
    )
  }

  get items() {
    const { comments } = this.props
    if (comments) {
      return comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))
    } else return null
  }
}

export default buttonDecorators(CommentList)
