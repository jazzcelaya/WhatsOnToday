import React, {Component} from 'react';

const Events = props => (
  <div>
    {props.eventInfo.map((event, i) => (
      <div key={i}><h4>{event[0]}</h4>
      <p className='eventLetter'>Where: {event[1]}</p>
      <p className='eventLetter'>When:  {event[4]}</p><br /></div>
    ))}
  </div>

)

export default Events;
