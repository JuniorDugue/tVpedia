import React from "react";
import Nav from "./Nav";
import Title from "./Title";

const MainPageLayout = ({ children }) => {
  return (
    <>
      <Title title="World of Films" subtitle="Are you looking for a movie or an actor/actress?" />
      <Nav />
      {children}
    </>
  );
};

export default MainPageLayout;
