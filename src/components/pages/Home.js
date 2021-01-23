import React, { useState } from "react";
import MainPageLayout from "../MainPageLayout";
import { apiGet } from "../misc/config";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then((result) => {
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

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map((item) => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <h2>Home</h2>
      <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
