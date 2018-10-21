import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, FILTER_SELECT } from '../constants'

export default (
  articleObj = {
    articlesState: defaultArticles,
    articlesVisable: {},
    articlesFilter: {}
  },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE: {
      let item_article = articleObj.articlesState.filter(
        (article) => article.id !== payload.id
      )
      let item_visable = articleObj.articlesVisable.filter(
        (article) => article.id !== payload.id
      )
      let item_filter = articleObj.articlesFilter.filter(
        (article) => article.value !== payload.id
      )
      articleObj = {
        ...articleObj,
        articlesState: item_article,
        articlesVisable: item_visable,
        articlesFilter: item_filter
      }
      return articleObj
    }

    case FILTER_SELECT: {
      let item_id = new Set(payload.select.selected.map((item) => item.value))
      let item_visable = articleObj.articlesState.filter((article) =>
        item_id.has(article.id)
      )
      articleObj = {
        ...articleObj,
        articlesVisable: item_visable,
        articlesFilter: payload.select.selected
      }
      return articleObj
    }

    default:
      return articleObj
  }
}
