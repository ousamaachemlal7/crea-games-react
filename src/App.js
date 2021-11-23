import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Navbar,Footer,Sidebar} from './components';
import {About,Error,Home,Person,FAQ} from './pages';
import Video from './components/video';
import logo from './Assets/logo.mp4';

function App() {
  return (
    <Router>

      <Navbar/>
     
        <Sidebar/>
        <div className='logo'>
          <Video src={logo} /> 
          <h1 className='title'> blabla </h1>
        </div>

      <Switch>
        <Route exact path='/'>§
          <Home/>
        </Route>
        <Route exact path='/Person'>
          <Person/>
        </Route>
        <Route exact path='/About'>
          <About/>
        </Route>
        <Route exact path='/FAQ'>
          <FAQ/>
        </Route>
        <Route exact path='*'>
          <Error/>
        </Route>
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
