import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
/* import Navbar from './components/Navbar'; */
import FetchingPage from './pages/fetching';
import BlogPage from './pages/blog';




function App() {
  return (
    <Router>
    {/*   <Navbar /> */}
     <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/doc" component={SigninPage} exact />
       <Route path="/fetch" component={FetchingPage} exact />
       <Route path="/blog" component={BlogPage} exact />
     </Switch>
    </Router>
  );
}

export default App;
