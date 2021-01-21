import React, { useState } from "react";
import MainPageLayout from "../MainPageLayout";

const Home = () => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSearch = () => {
    // api example http://api.tvmaze.com/search/shows?q=girls
    fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  // to allow enter to search for results
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <MainPageLayout>
      <h2>Home</h2>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
