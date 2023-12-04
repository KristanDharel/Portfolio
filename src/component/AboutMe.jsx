import React from "react";
import "./aboutMe.css";
import ReactCurvedText from "react-curved-text";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const text = ` S T A C K - E N T H U S I A S T -  M E R N - `;
  const navigate = useNavigate(null);

  return (
    <div className="container">
      <p className="heading">
        Full Stack WEB developer.<br></br> with expertise in MERN Stack
      </p>

      <div className="section1">
        <strong className="head">HELLO: I'M KRISTAN.</strong>
        <p className="introDec">
          I am a full stack web developer,<br></br> I am currently pursuing my
          <br></br>
          Bachelors Degree at Islington<br></br> College.
        </p>
      </div>
      <div className="expertise">
        <strong className="exhead">WHERE TO FIND ME:</strong>
        <br></br>
        <ul className="skill1">
          <a
            href="https://www.facebook.com/kristan.dharel?mibextid=2JQ9oc"
            target="blank"
          >
            <img src="facebook .png" className="face" alt="facebook" />
          </a>
          <a href="www.instagram.com" target="blank">
            <img src="insta.png" className="insta" alt="insta" />
          </a>
          <a
            href="https://www.linkedin.com/in/kristan-dharel-298607252/"
            target="blank"
          >
            <img src="link.png" className="link" alt="link" />
          </a>
        </ul>
      </div>
      {/* <div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">Lets work together!</h5>
          <p class="card-text">
            Join me on my journey and be a part of my innovation.
          </p>
          <p class="card-text">
            I'm available at <a href="">dharelkristan@gmail.com</a>
          </p>
          <a href="#" class="btn btn-primary">
            Button
          </a>
        </div>
      </div> */}
      <div className="connect">
        <strong className="together">Let's work together!</strong>
        <br></br>
        <p className="con">
          Join me on my journey and be a part of my innovation.<br></br>
          Connect with me: <br></br>
        </p>
        <button
          className="contactBtn"
          onClick={() => {
            navigate("/contact");
          }}
        >
          CONNECT
        </button>

        {/* <button className="resume">Download Resume</button> */}
      </div>

      <div className="image">
        <img
          className="kristan"
          src="kristan.jpeg"
          alt="image"
          style={{ height: "40em" }}
        />
      </div>
      <div className="curved">
        <ReactCurvedText
          width={400}
          height={400}
          cx={250}
          cy={150}
          rx={44}
          ry={43}
          startOffset={14}
          reversed={true}
          text={text}
          textProps={{
            style: { fontSize: 15, fill: "orangered" },
          }}
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        />
      </div>
    </div>
  );
};

export default AboutMe;
