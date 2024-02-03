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
          You can find me on: <br></br>
          LinkedIn Facebook Github Gmail Phone Number
        </section>
      </div>
    </div>
  );
};

export default Contact;
