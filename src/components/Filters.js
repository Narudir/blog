import React from 'react';

const Filters = (props) => {
  const citiesOptions = props.cities.map((city, index) =>
    <option value={city} key={index}>{city}</option>
  );
  const companiesOptions = props.companies.map((company, index) =>
    <option value={company} key={index}>{company}</option>
  );
  const sortingOptions = props.sorting.map((sortOpt, index) =>
    <option value={sortOpt} key={index}>{sortOpt}</option>
  );
  return (
    <form>
      <select value={props.cityFilter} onChange={(e) => {props.onCityChange(e.target.value)}}>
        {citiesOptions}
      </select>
      <select value={props.companyFilter} onChange={(e) => {props.onCompanyChange(e.target.value)}}>
        {companiesOptions}
      </select>
      <input type="text" value={props.searchFilter} onChange={(e) => {props.onSearch(e.target.value)}}/>
      <select value={props.sortFilter} onChange={(e) => {props.onSortChange(e.target.value)}}>
        {sortingOptions}
      </select>
    </form>
  )
}

export default Filters
