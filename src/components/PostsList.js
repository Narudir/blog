import React from 'react';

const PostsList = ({posts, onClose}) => {
  const list = posts.map(post =>
    <li key={post.id}>
      <i onClick={() => onClose(post.id)}>X</i>
      <h2>{post.title}</h2>
      <h3>{post.name} - {post.company.name} - {post.address.city}</h3>
      <p>{post.body}</p>
    </li>
  )
  return (
    <ul>
      {list}
    </ul>
  )
}

export default PostsList
