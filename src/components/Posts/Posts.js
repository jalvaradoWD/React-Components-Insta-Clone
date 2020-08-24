import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map((post, index) => <Post key={index} post={post} likePost={likePost} liked={false} />)}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
