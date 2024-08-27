import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{fontStyle:'italic'}}>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Desalegn Sefiw   </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            Computer Science who loves to transform ideas into reality using
            code.
            <br />
            Motivated designer and developer with experience creating
            custom websites with ReactJs, JavaScript, HTML5, CSS.  app using ReactJs,PHP/laravel, Javascript, nodejs
            and Mobile App using java.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight style={{backgroundColor:'white'}} /> Create Some Attractive and Powerfull Ideas
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Technological Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
