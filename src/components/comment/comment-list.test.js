import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentListWithToggleOpen, { CommentList } from './comment-list'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  articles.map((article) =>
    it('should render', () => {
      const container = shallow(
        <CommentList comments={article.comments} isOpen={true} />
      )

      expect(container.find('.test--comment-list__item').length).toEqual(
        article.comments.length
      )
    })
  )

  articles.map((article) =>
    it('should render all closed comments by default', () => {
      const container = render(
        <CommentListWithToggleOpen comments={article.comments} />
      )

      expect(container.find('.test--comment__body').length).toEqual(0)
    })
  )

  articles.map((article) =>
    it('should open comments', () => {
      const container = mount(
        <CommentListWithToggleOpen comments={article.comments} />
      )

      expect(container.find('.test--comment__body').length).toEqual(0)

      container
        .find('.test--comment__btn')
        .at(0)
        .simulate('click')

      expect(container.find('.test--comment__body').length).toEqual(1)
    })
  )

  articles.map((article) =>
    it('should fetch data on mount', () => {
      let functionIsCalled = false
      mount(
        <CommentListWithToggleOpen
          comments={article.comments}
          fetchData={() => (functionIsCalled = true)}
        />
      )

      expect(functionIsCalled).toBe(true)
    })
  )
})
