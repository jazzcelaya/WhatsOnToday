import React, {Component} from 'react';
import Eventitem from "./eventitem.jsx";

const Events = props => (
  <div>
    {props.eventInfo.map((event, i) => (
      <Eventitem key={i} event= {event}/>
    ))}
  </div>

)

export default Events;
