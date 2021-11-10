import { MainLayout } from "./components/layout/styles/Layout.styled";
import Search from "./components/search/Search";
import Results from "./components/results/Results";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

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
    console.log(results);
    setIsLoading(false);
  };

  return (
    <MainLayout>
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
            />
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="/results/*" element={<Results />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
