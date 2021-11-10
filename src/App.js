import { MainLayout } from "./components/layout/styles/Layout.styled";
import Search from "./components/search/Search";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Loading from "./components/utilities/Loading";
import ResultsVideos from "./components/results/resultsItems/ResultsVideos";
import ResultsAll from "./components/results/resultsItems/ResultsAll";
import ResultsImages from "./components/results/resultsItems/ResultsImages";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "0b248f83ddmshd06ceba51041151p1ce8d1jsn3c5f5e3aa85b",
      },
    });
    const data = await response.json();
    setResults(data);
    setIsLoading(false);
  };

  return (
    <MainLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Search
                searchTerm={searchTerm}
                handleChange={handleChange}
                getResults={getResults}
                isLoading={isLoading}
                results={results}
                setSearchTerm={setSearchTerm}
              />
            }
          />

          <Route
            path="/results"
            element={
              <ResultsAll
                searchTerm={searchTerm}
                handleChange={handleChange}
                getResults={getResults}
                isLoading={isLoading}
                setSearchTerm={setSearchTerm}
                searchResults={results}
              />
            }
          />

          <Route
            path="/videos"
            element={
              <ResultsVideos
                searchTerm={searchTerm}
                searchResults={results}
                getResults={getResults}
              />
            }
          />

          <Route
            path="/images"
            element={
              <ResultsImages
                searchTerm={searchTerm}
                searchResults={results}
                getResults={getResults}
              />
            }
          />
        </Routes>
      )}
    </MainLayout>
  );
}

export default App;
