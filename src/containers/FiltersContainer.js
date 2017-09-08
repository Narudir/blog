import { connect } from 'react-redux'
import Filters from '../components/Filters'
import {
  filterByCity,
  filterByCompany,
  search,
  sort
} from '../actions'
import postsWithUserData from '../data/PostsWithUserData'

const sortingOptions = ["ASC", "DESC"];

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function mapPostsToCities() {
  const allCities = postsWithUserData.map(post => post.address.city);
  const uniqueCities = allCities.filter(onlyUnique);
  return uniqueCities
}

function mapPostsToCompanies() {
  const allCompanies = postsWithUserData.map(post => post.company.name);
  const uniqueCompanies = allCompanies.filter(onlyUnique);
  return uniqueCompanies
}

const mapStateToProps = state => {
  return {
    cityFilter: state.cityFilter,
    companyFilter: state.companyFilter,
    searchFilter: state.searchFilter,
    sortFilter: state.sortFilter,
    cities: mapPostsToCities(),
    companies: mapPostsToCompanies(),
    sorting: sortingOptions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCityChange: city => {
      dispatch(filterByCity(city))
    },
    onCompanyChange: company => {
      dispatch(filterByCompany(company))
    },
    onSearch: term => {
      dispatch(search(term))
    },
    onSortChange: sortingOption => {
      dispatch(sort(sortingOption))
    }
  }
}

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

export default FiltersContainer
