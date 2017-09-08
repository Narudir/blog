import cityFilter from '../reducers'

it('city reducers returns state with specified city', () => {
  const newState = {
    cityFilter: 'Kherson',
    companyFilter: 'SHOW_ALL',
    searchFilter: 'SHOW_ALL',
    sortFilter: 'NONE',
    removedPosts: []
  }
  expect(newState).toEqual(cityFilter({type: 'FILTER_CITY', cityFilter: 'Kherson'}));
})
