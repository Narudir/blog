import { connect } from 'react-redux'
import PostsList from '../components/PostsList'
import { removePost } from '../actions'
import postsWithUserData from '../data/PostsWithUserData'

const postMatchesCity = (post, cityFilter) => {
  if (cityFilter === 'SHOW_ALL' || cityFilter === post.address.city) {
    return true
  }
  return false
}

const postMatchesCompany = (post, companyFilter) => {
  if (companyFilter === 'SHOW_ALL' || companyFilter === post.company.name) {
    return true
  }
  return false
}

const postMatchesSearchTerm = (post, searchFilter) => {
  if (searchFilter === 'SHOW_ALL' || post.title.indexOf(searchFilter) !== -1) {
    return true
  }
  return false
}

const postNotRemoved = (post, removedPosts) => {
  if (removedPosts === [] || !removedPosts.includes(post.id)) {
    return true
  }
  return false
}

const sortPosts = (postsWithUserData, sortFilter) => {
  if (sortFilter === 'NONE') {
    return postsWithUserData
  } else {
    const sortedPosts = postsWithUserData.sort((a, b) => {
      let [titleA, titleB] = [a.title, b.title];
      if (titleA < titleB) { return -1 }
      if (titleA > titleB) { return 1 }
      return 0
    });
    switch (sortFilter) {
      case 'ASC':
          return sortedPosts
      case 'DESC':
          return sortedPosts.reverse()
    }
  }
}

const mapStateToPosts = state => {
  const {
    cityFilter,
    companyFilter,
    searchFilter,
    sortFilter,
    removedPosts
  } = state;
  const filteredUserPosts = postsWithUserData.filter(
    post =>
    postMatchesCity(post, cityFilter) &&
    postMatchesCompany(post, companyFilter) &&
    postMatchesSearchTerm(post, searchFilter) &&
    postNotRemoved(post, removedPosts)
  );
  const sortedPosts = sortPosts(filteredUserPosts, sortFilter);
  return sortedPosts
}

const mapStateToProps = state => {
  return {
    posts: mapStateToPosts(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClose: id => {
      dispatch(removePost(id))
    }
  }
}

const VisiblePosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)

export default VisiblePosts
