import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterSelect } from '../../ac'

class SelectFilter extends Component {
  handleChange = (selected) => {
    this.props.filterSelect({ selected })
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles.articlesState,
    selected: state.articles.articlesFilter.length
      ? state.articles.articlesFilter
      : null
  }),
  { filterSelect }
)(SelectFilter)
