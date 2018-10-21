import { INCREMENT, DELETE_ARTICLE, FILTER_SELECT } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function filterSelect(select) {
  return {
    type: FILTER_SELECT,
    payload: { select }
  }
}
