import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Contact from "./Contact";

const MyRouter = () => {
  return (
    <div>
      <Routes>
        {/* <Route
          path="/"
          element={<RegistrationSuccessPage></RegistrationSuccessPage>}
        /> */}
        <Route path="/" element={<AboutMe></AboutMe>} />
        <Route path="project" element={<Resume></Resume>} />
        <Route path="contact" element={<Contact></Contact>} />
        <Route path=":id" element={"Page not found ERROR 404"} />
      </Routes>
    </div>
  );
};

export default MyRouter;
