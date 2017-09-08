const users = require('../data/users.json');
const posts = require('../data/posts.json');

const postsWithUserData = posts.map(post => {
  let correspondingUser = users.filter(user => user.id === post.userId);
  return {...correspondingUser[0], ...post}
});

export default postsWithUserData
