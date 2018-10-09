import React, { Component } from 'react'

const buttonDecorators = (OriginalComponent) =>
  class buttonDecorators extends Component {
    state = {
      isOpen: false
    }

    toggleCommentOpen = (isOpen) => this.setState({ isOpen })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleCommentOpen={this.toggleCommentOpen}
          isOpen={this.state.isOpen}
        />
      )
    }
  }

export default buttonDecorators
