import React, { Component, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Research from './Research/Research';
import M from 'materialize-css';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

class App extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  }
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop/>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/research' component={Research}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;