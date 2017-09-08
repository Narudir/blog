import {
  filterByCity,
  filterByCompany,
  search,
  sort
} from '../actions'

describe('actions', () => {
  it('filterByCity created city filter action', () => {
    const city = 'Kherson';
    const cityFilterAction = { type: 'FILTER_CITY', cityFilter: city };
    const newAction = filterByCity('Kherson');
    expect(newAction).toEqual(cityFilterAction);
  });
  it('filterByCompany created company filter action', () => {
    const company = 'OSF';
    const companyFilterAction = { type: 'FILTER_COMPANY', companyFilter: company };
    const newAction = filterByCompany('OSF');
    expect(newAction).toEqual(companyFilterAction);
  });
  it('search created search filter action', () => {
    const searchTerm = 'Batman';
    const searchFilterAction = { type: 'SEARCH', searchFilter: searchTerm };
    const newAction = search(searchTerm);
    expect(newAction).toEqual(searchFilterAction);
  });
  it('sort created sort filter action', () => {
    const sortOption = 'ASC';
    const sortFilterAction = { type: 'SORT', sortFilter: sortOption };
    const newAction = sort(sortOption);
    expect(newAction).toEqual(sortFilterAction);
  });
})
