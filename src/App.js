import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

// import Posts from './containers/Posts';
import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy( () => {
  return import('./containers/Posts')
});

class App extends Component {
  state ={ showPosts: false};

  modeHandler = () => {
    this.setState(prevState => {
      return  {showPosts : !prevState.showPosts}
    })
  }
  render() {
    return (

     <React.Fragment>
        <button onClick={this.modeHandler}>Toggle Mode</button>

          {this.state.showPosts ? (
            <Suspense fallback={<div>Loading...</div>}>
                  <Posts />
            </Suspense>
          ) : <User/>
          }
     </React.Fragment>

      // <BrowserRouter>
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     <Route
      //      path="/posts" 
      //      render={() => (
      //     <Suspense fallback={<div>Loading...</div>}>
      //       <Posts />
      //     </Suspense>
      //     )} />
      //   </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default App;


//after 16.6 you can lazy() method of React object to load the comps only when they needed
//this is not only specific to routing - you can also load the data or comps on some condition match
//both are shown above