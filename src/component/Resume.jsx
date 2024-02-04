import React from "react";
import "./resume.css";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigation = useNavigate();
  return (
    <div className="project">
      <h1 className="heading1"> MY PROJECTS</h1>
      <div className="first">
        <a href="https://github.com/KristanDharel/Portfolio" target="_blank">
          <div className="container1">
            {/* <img src="rental.png" alt="" /> */}
            <div className="content">
              {/* <h1>Car Rental</h1> */}
              <h1
                className="project1_heading"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  paddingTop: "5%",
                }}
              >
                Car Rental
              </h1>

              <p
                className="rental_paragraph"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                This is car rental. It has been made in React.<br></br>
              </p>
              <p
                className="note1"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Click for the source code.
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/Pratik-Karanjit/recipe-website"
          target="_blank"
        >
          <div className="container2">
            <div className="content2">
              <h1 className="heading2">Food Recipe</h1>
              <p
                className="food_paragraph"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                This is food-recipe website.It is a group project. It has been
                made in React.<br></br>
              </p>
              <p
                className="note2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Click for the source code.
              </p>
            </div>
          </div>
        </a>

        <a href="https://github.com/KristanDharel/Portfolio" target="_blank">
          <div className="container3">
            <div className="content3">
              <h1 className="heading3">Portfolio</h1>
              <p
                className="port_paragraph"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                This is car rental. It has been made in React.<br></br>
              </p>
              <p
                className="note3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Click for the source code.
              </p>
            </div>
          </div>
        </a>
      </div>
      <section className="two">
        <a
          href="https://github.com/KristanDharel/AuthorizationExpress"
          target="_blank"
        >
          <div className="container4">
            <div className="content4">
              <h1 className="heading4">Login Management</h1>
              <p
                className="login_paragraph"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                This is Login Management made using Node and Express.js.
                <br></br>
              </p>
              <p
                className="note4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Here MongoDB has been used as a database.
              </p>
              <p
                className="note5"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Click for the source code.
              </p>
            </div>
          </div>
        </a>
      </section>
    </div>
  );
};

export default Resume;
