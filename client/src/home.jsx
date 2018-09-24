import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import API_KEY from './api.js';
import Form from './components/form.jsx';
import Events from './components/events.jsx';
import Map from './components/map.jsx';
import $ from 'jquery';
import Navigation from './components/Navigation.js';
import Comments from './components/feedback.jsx';
import Footer from './components/footer.jsx';
import swal from 'sweetalert';
import CategoryButtons from './components/categoryButtons.jsx'
import fire from './components/fire.jsx';


class App extends Component {
 constructor (props){
   super(props);
   this.state = {
     eventList: [],
     lat: null,
     lon: null,
     description:'',
     category: '',
     eventId: ''
   }


   this.logout = this.logout.bind(this);
   this.getEvent = this.getEvent.bind(this);
   this.getKeyword = this.getKeyword.bind(this);
   this.addComment = this.addComment.bind(this);
   this.openInfoWindow = this.openInfoWindow.bind(this);
   this.sweetalertfunction = this.sweetalertfunction.bind(this);
   this.getMusic = this.getMusic.bind(this);
   this.getTheater = this.getTheater.bind(this);
   this.getSports = this.getSports.bind(this);
   this.getConferences = this.getConferences.bind(this);
 }

 logout() {
        fire.auth().signOut();
}

 openInfoWindow (id) {
   this.setState({
     eventId: id
   })
 }

 sweetalertfunction(src) {
  swal(src);
  }
 addComment(description) {

   $.ajax({
     url:'/events',
     type: "POST",
     contentType: 'application/json',
     data: JSON.stringify({
       description: description
     }),
     success: (data)=> {
     },
     error: (xhr,status,error) => {
     }
   });
 }

 // handleToggleOpen(isOpen) {
 // 	this.setState({
 // 		isOpen: !this.state.isOpen
 // 	});
 // }

  async getEvent() {
    var proxyUrl = `https://cors-anywhere.herokuapp.com/`, targetUrl = `http://api.eventful.com/json/events/search?app_key=${API_KEY}&location=${this.state.lat}, ${this.state.lon}&within=14&t=today`
   await fetch (proxyUrl + targetUrl)
    .then(res => res.json())
    .then(data => {
    this.setState({
        eventList: data.events.event
      })
    })
 }

 getKeyword(keyword) {
    var proxyUrl = `https://cors-anywhere.herokuapp.com/`, targetUrl = `http://api.eventful.com/json/events/search?app_key=${API_KEY}&location=${this.state.lat}, ${this.state.lon}&within=14&t=today&tittle:"${keyword}"`
    fetch (proxyUrl + targetUrl)
    .then(res => res.json())
    .then(data => {
      if (data.events === null) {
        return this.sweetalertfunction('Sorry!!..there are no '+ categorySelected +' events scheduled today');
      } else {
        this.setState({
            eventList: data.events.event
          })
      }
    })
 }

 getMusic() {
    var proxyUrl = `https://cors-anywhere.herokuapp.com/`, targetUrl = `http://api.eventful.com/json/events/search?app_key=${API_KEY}&location=${this.state.lat}, ${this.state.lon}&within=14&t=today&q=music`
    fetch (proxyUrl + targetUrl)
    .then(res => res.json())
    .then(data => {
      if (data.events === null) {
        return this.sweetalertfunction('Sorry!!..there are no concerts scheduled today');
      } else {
        this.setState({
            eventList: data.events.event
          })
      }
    })
 }

 getTheater() {
    var proxyUrl = `https://cors-anywhere.herokuapp.com/`, targetUrl = `http://api.eventful.com/json/events/search?app_key=${API_KEY}&location=${this.state.lat}, ${this.state.lon}&within=14&t=today&q=teatro`
    fetch (proxyUrl + targetUrl)
    .then(res => res.json())
    .then(data => {
      if (data.events === null) {
        return this.sweetalertfunction('Sorry!!..there are no plays scheduled today');
      } else {
        this.setState({
            eventList: data.events.event
          })
      }
    })
 }

 getSports() {
    var proxyUrl = `https://cors-anywhere.herokuapp.com/`, targetUrl = `http://api.eventful.com/json/events/search?app_key=${API_KEY}&location=${this.state.lat}, ${this.state.lon}&within=14&t=today&q=sports`
    fetch (proxyUrl + targetUrl)
    .then(res => res.json())
    .then(data => {
      if (data.events === null) {
        return this.sweetalertfunction('Sorry!!..there are no sport events scheduled today');
      } else {
        this.setState({
            eventList: data.events.event
          })
      }
    })
 }

 getConferences() {
    var proxyUrl = `https://cors-anywhere.herokuapp.com/`, targetUrl = `http://api.eventful.com/json/events/search?app_key=${API_KEY}&location=${this.state.lat}, ${this.state.lon}&within=14&t=today&q=conferencias`
    fetch (proxyUrl + targetUrl)
    .then(res => res.json())
    .then(data => {
      if (data.events === null) {
        return this.sweetalertfunction('Sorry!!..there are no conferences scheduled today');
      } else {
        this.setState({
            eventList: data.events.event
          })
      }
    })
 }


componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        lat: location.coords.latitude,
        lon: location.coords.longitude
      })
      this.getEvent();
    });
 }


 render() {

   var eventInfo = this.state.eventList.map((item) =>
      [item.title, item.venue_name, item.longitude, item.latitude, item.start_time, item.description, item.id]);

   var locations = eventInfo.map((location) =>
      [location[3], location[2], location[0], location[1], location[5], location[6]]);

   return (
     <div>
       <button onClick={this.logout}>Logout</button>

        < CategoryButtons getMusic={this.getMusic} getTheater={this.getTheater}
        getSports={this.getSports} getConferences={this.getConferences}
        getCategory={this.getCategory} getEvent={this.getEvent}/>

        <Form getCategory={this.getKeyword} getEvent={this.getEvent}/>



            <div className= "col-md-6 mapstyle" style={{height:200}}>

               <Map locationInfo = {locations} eventId={this.state.eventId}/>

            </div>

            <div className= "scrollEvents col-md-6">

              <Events eventInfo ={eventInfo} openInfoWindow = {this.openInfoWindow}/>

            </div>

            <div>

              <Footer />

            </div>

    </div>

   );
 }
}

export default App;
