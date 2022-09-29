import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {getAllPosts} from "./getAllPosts";
import Post from "./components/Post";
import FormAddPost from "./components/FormAddPost";
import PostInfo from "./components/PostInfo";
import PostEdit from "./components/PostEdit";
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts(setPosts)
  }, []);

  const addPost = async (content) => {
    await fetch('http://localhost:7777/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 0,
        content: content
      })
    })
        .then(myJson => console.log('Add new Post: ', myJson));

    getAllPosts(setPosts);
  }

  return (
    <div className="App">
      <Router>
        <button className='btn-add-post'>
          <Link to="/posts/new">Создать пост</Link>
        </button>
        <Route path='/posts/new' render={props => <FormAddPost {...props} addPost={addPost}/>}/>
        <Route exact path="/" render={() => posts.map(e =>
            <Post key={e.id} id={e.id} content={e.content}/>)}/>
        <Route exact path='/post/:id' component={PostInfo}/>
        <Route exact path='/post/:id/edit' component={PostEdit}/>
      </Router>
    </div>
  );
}

export default App;
