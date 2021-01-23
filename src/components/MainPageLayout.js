import React from "react";
import Nav from "./Nav";
import Title from "./Title";

const MainPageLayout = ({ children }) => {
  return (
    <>
      <Title title="tVpedia" subtitle="Are you looking for a TV Show or an Actor/Actress?" />
      <Nav />
      {children}
    </>
  );
};

export default MainPageLayout;
