import React, {Component} from 'react';


const Eventitem = props => (

  <div>
    {<div id={props.event[6]} onClick={() =>this.props.passId(props.event[6])}><h4>{props.event[0]}</h4>
        <p className='eventLetter'>Where: {props.event[1]}</p>
        <p className='eventLetter'>When:  {props.event[4]}</p><br />
      </div> }
  </div>

)

export default Eventitem;
