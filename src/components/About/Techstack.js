import React from "react";
import { Col, Row } from "react-bootstrap";
import Rating from "react-rating"

function Techstack(props) {
  return (
    <>
    <Row style={{color:"blue",fontSize:30, justifyContent: "left", paddingBottom: "10px" }}>
       <Col className="skill-name" xs={4}>
        {props.name}
      </Col>
      <Col xs={6}>
        <Rating
         style={{backgroundColor:'blue'}}
          readonly
          start={0}
          stop={5}
          initialRating={props.initialRating}
          className="rating"
        />
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
