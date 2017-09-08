import { combineReducers } from 'redux'
const posts = require('./data/posts.json');

function cityFilter(state = 'SHOW_ALL', action) {
  return action.type === 'FILTER_CITY' ? action.cityFilter : state
}

function companyFilter(state = 'SHOW_ALL', action) {
  return action.type === 'FILTER_COMPANY' ? action.companyFilter : state
}

function searchFilter(state = 'SHOW_ALL', action) {
  return action.type === 'SEARCH' ? action.searchFilter : state
}

function sortFilter(state = 'NONE', action) {
  return action.type === 'SORT' ? action.sortFilter : state
}

function removedPosts(state = [], action) {
  return action.type === 'REMOVE_POST' ? [...state, action.id] : state
}

const blogApp = combineReducers({
  cityFilter,
  companyFilter,
  searchFilter,
  sortFilter,
  removedPosts
})

export default cityFilter
