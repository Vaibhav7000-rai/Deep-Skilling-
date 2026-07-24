import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [new Post(1, 'Welcome', 'This is a sample blog post.')],
      error: null
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        const posts = data.slice(0, 10).map((item) => new Post(item.id, item.title, item.body));
        this.setState({ posts, error: null });
      })
      .catch((error) => {
        this.setState({ error: error.message });
        alert(error.message);
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error) {
    alert(error.message);
  }

  render() {
    const { posts, error } = this.state;

    return (
      <div>
        <h1>Posts</h1>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
