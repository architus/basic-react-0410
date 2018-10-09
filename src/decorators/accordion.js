//HOC === Higher Order Component == Decorator
import React, { Component } from 'react'

const accordionDecorator = (OriginalComponent) =>
  class AccordionDecorator extends Component {
    state = {
      openItemId: null,
      isOpen: false
    }

    toggleOpenItem = (openItemId, isOpen) => {
      this.setState({ openItemId })
      this.setState({ isOpen })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpenItem={this.toggleOpenItem}
          openItemId={this.state.openItemId}
          isOpen={this.state.isOpen}
        />
      )
    }
  }

export default accordionDecorator
