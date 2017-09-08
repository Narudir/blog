export function filterByCity(cityFilter) {
  return { type: 'FILTER_CITY', cityFilter }
}

export function filterByCompany(companyFilter) {
  return { type: 'FILTER_COMPANY', companyFilter }
}

export function search(searchFilter) {
  return { type: 'SEARCH', searchFilter }
}

export function sort(sortFilter) {
  return { type: 'SORT', sortFilter }
}

export function removePost(id) {
  return { type: 'REMOVE_POST', id }
}
