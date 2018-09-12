import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import API_KEY from './api.js';
import Form from './components/form.jsx';
import Events from './components/events.jsx';
import Map from './components/map.jsx';
import $ from 'jquery';
import Contact from './components/Comments.js';
import Navigation from './components/Navigation.js';
import Comments from './components/feedback.jsx';
import App from './home.jsx'


class Main extends Component {

 render() {

   return (
     <BrowserRouter>
     <div>

      <Navigation />

  <Switch>

  <Route exact path='/' component={App} />
  <Route path='/contact' component={Contact} />
</Switch>
  </div>
</BrowserRouter>
   );
 }
}

export default Main;
