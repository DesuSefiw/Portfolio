import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/lov.png";
//import img from "../../Assets/2.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import { AiOutlineFontSize } from "react-icons/ai";
import { FaLightbulb } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header" style={{fontStyle:'italic'}}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  Welcome
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong  className="main-name"> Desalegn Sefiw</strong>
              </h1>

              <p className="heading-description blockquote">
                I am passionate about using React.js and some  Libraries
                to create awesome user experiences. With over three years of
                experience developing web applications using the latest
                front-end and back-end technologies. I am Develope a Strong Foundetion in Computer Science principles, Programming languages like PHP /laravel,phyton,Node.js  etc 
                and problem Solving techniques...
              </p>

              <div style={{color:"white"}} className="heading-type" >
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic " alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1 style={{color:"black"}}>Engage and Collaborate</h1>
              <p style={{color:"black"}}>
                {" "}
                Seeking to establish a meaningful connection? I welcome the opportunity to discuss <br />
                potential project collaborations or any other inquiries you may hav
                <br />
                <strong>Let us embark on a journey of shared success. I look forward to the chance to collaborate and create something remarkable.</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
