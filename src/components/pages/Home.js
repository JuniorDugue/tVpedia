import React, { useState } from "react";
import MainPageLayout from "../MainPageLayout";
import { apiGet } from "../misc/config";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const isShowsSearch = searchOption === "shows";

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      setResults(result);
      console.log(result);
    });
  };

  // to allow enter to search for results
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = (e) => {
    setSearchOption(e.target.value);
  };
  console.log(searchOption);

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? results.map((item) => <div key={item.show.id}>{item.show.name}</div>) : results.map((item) => <div key={item.person.id}>{item.person.name}</div>);
    }
    return null;
  };

  return (
    <MainPageLayout>
      <h2>Home</h2>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} placeholder="shows / actor / actress" />
      <div>
        <label htmlFor="shows-search">
          Shows
          <input type="radio" value="shows" onChange={onRadioChange} checked={isShowsSearch} id="shows-search" />
        </label>
        <label htmlFor="actors-actress-search">
          Actor/Actress
          <input type="radio" value="people" onChange={onRadioChange} checked={!isShowsSearch} id="actors-actress-search" />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
