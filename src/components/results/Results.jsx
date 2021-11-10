import React from "react";
import ResultsNav from "./resultsHeader/ResultsNav";
import ResultsSearch from "./resultsHeader/ResultsSearch";
import ResultsAll from "./resultsItems/ResultsAll";
import ResultsVideos from "./resultsItems/ResultsVideos";
import { Routes, Route } from "react-router-dom";

export default function Results({ searchResults, searchTerm, getResults }) {
  return (
    <>
      <ResultsSearch />
      <ResultsNav
        searchTerm={searchTerm}
        searchResults={searchResults}
        getResults={getResults}
      />
      {/* <ResultsAll searchResults={searchResults} /> */}

      <Routes>
        <Route
          path="/results/all"
          element={<ResultsAll searchResults={searchResults} />}
        />

        <Route
          path="/results/videos"
          element={
            <ResultsVideos
              searchTerm={searchTerm}
              searchResults={searchResults}
              getResults={getResults}
            />
          }
        />
      </Routes>
    </>
  );
}
