import React, { Component } from 'react';
import fire from './components/fire.jsx';
import Login from './components/Login.jsx';
import App from './home.jsx';

class newMain extends Component {
  constructor() {
  super();
  this.state = ({
    user: null,
  });
  this.authListener = this.authListener.bind(this);
}

componentDidMount() {
  this.authListener();
}

authListener() {
  fire.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      this.setState({ user });
      localStorage.setItem('user', user.uid);
    } else {
      this.setState({ user: null });
      localStorage.removeItem('user');
    }
  });
}
render() {
  return (
   <div>
     <center>
     {this.state.user ?  ( <App />) : (<Login />)}
     </center>
   </div>
  );
 }
}

 export default newMain;
