import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";


const Contact = () => {
  return (
    <Grid className="show-grid-EventMenu">

    <Row className="eventMenuTop" >

          <Col xs={6} md={4}>
          <img id='eventMenuImgs' src="https://i.imgur.com/Z6tAlCA.jpg" alt="Sopes"/>
          </Col>

          <Col xs={6} md={4}>
          <img id='eventMenuImgs' src="https://i.imgur.com/SVBX56K.jpg" alt="Huaraches"/>
          </Col>

          <Col xs={6} md={4}>
          <img id='eventMenuImgs' src="https://i.imgur.com/hmQi6pQ.jpg" alt="Tortillas Hechas A Mano"/>
          </Col>

        </Row>


        <Row className="eventMenuBottom" >

      <Col xs={6} md={4}>
      <img id='eventMenuImgs' src="https://i.imgur.com/ac7higI.jpg" alt="Jugos Frescos Al Momento"/>
      </Col>

      <Col xs={6} md={4}>
      <img id='eventMenuImgs' src="https://i.imgur.com/cM2zirU.jpg" alt="Tacos de Guisado"/>
      </Col>

      <Col xs={6} md={4}>
      <img id='eventMenuImgs' src="https://i.imgur.com/path2PD.png" alt="Mas!!"/>
      </Col>

    </Row>
    </Grid>

  );
};

export default Contact;


// <div >
// <img src="https://i.imgur.com/Z6tAlCA.jpg" className="rounded mx-auto d-block" width="250px" height="250px" />
// <img src="https://i.imgur.com/SVBX56K.jpg" className="img-fluid img-thumbnail" width="250px" height="250px"/>
// <img src="https://i.imgur.com/hmQi6pQ.jpg" className="img-fluid img-thumbnail" width="250px" height="250px"/>
// <img src="https://i.imgur.com/ac7higI.jpg" className="img-fluid img-thumbnail" width="250px" height="250px"/>
// <img src="https://i.imgur.com/cM2zirU.jpg" className="img-fluid img-thumbnail" width="250px" height="250px"/>
// <img src="https://i.imgur.com/path2PD.png" className="img-fluid img-thumbnail" width="250px" height="250px"/>
// </div>




//   <center><iframe width="560" height="315" src="https://www.youtube.com/embed/CcaIkafjimA"
// frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
// </iframe></center>
