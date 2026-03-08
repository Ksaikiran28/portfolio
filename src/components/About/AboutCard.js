import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Kanaparthi Saikiran</span>{" "}
            from <span className="purple">Hyderabad, India</span>.
            <br />
            <br></br>
            I’m a final-year <span className="purple">Computer Science student</span>  with a strong interest in software development and problem solving. I enjoy transforming ideas into real-world applications and building scalable, efficient web solutions.{" "}
            
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>
          
          <br></br>
          <footer className="blockquote-footer">Saikiran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
