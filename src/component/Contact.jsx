import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contactMe">
      <div className="container16">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          Connect With Me
        </h1>

        <p>Hi, this is me Kristan once again,</p>
        <p>
          <br /> I am a sophmore BIT student who is interested in creating
          websites.
        </p>
        <br />
        <p>If you like my work you can connect with me in my socials.</p>
      </div>
      <div className="contactWithme">
        <section className="faceb">
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
              <a href="https://github.com/KristanDharel" target="blank">
                <img
                  src="github.svg"
                  className="insta"
                  alt="insta"
                  style={{ height: "40px" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/kristan-dharel-298607252/"
                target="blank"
              >
                <img src="link.png" className="link" alt="link" />
              </a>
            </ul>
          </div>
          LinkedIn
          <br />
          Facebook
          <br />
          Github
          <br />
          Gmail
          <br />
          Phone Number
        </section>
      </div>
    </div>
  );
};

export default Contact;
