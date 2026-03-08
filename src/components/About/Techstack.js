import React from "react";
import { Col, Row } from "react-bootstrap";

import Javascript from "../../Assets/TechIcons/javascript-logo-svgrepo-com.svg";
import Node from "../../Assets/TechIcons/nodejs-svgrepo-com.svg";
import ReactIcon from "../../Assets/TechIcons/reactjs-svgrepo-com.svg";

import Java from "../../Assets/TechIcons/java-svgrepo-com.svg";

import Git from "../../Assets/TechIcons/git-svgrepo-com.svg";

import SQL from "../../Assets/TechIcons/mysql-svgrepo-com.svg"

import Mongo from "../../Assets/TechIcons/mongo-svgrepo-com.svg";
// import SQL from "../../Assets/TechIcons/SQL.svg";

import Tailwind from "../../Assets/TechIcons/tailwindcss-icon-svgrepo-com.svg";

import Postman from "../../Assets/TechIcons/postman-icon-svgrepo-com.svg";

import html from "../../Assets/TechIcons/html-5-svgrepo-com.svg";

import css from "../../Assets/TechIcons/css-3-svgrepo-com.svg";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={html} alt="HTML" />
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={css} alt="CSS" />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
     

      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      
      
      

      <Col xs={4} md={2} className="tech-icons" id=".mysql-icon">
        <img src={SQL} alt="MySQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>

     
      
      

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      
      

      
    </Row>
  );
}

export default Techstack;
