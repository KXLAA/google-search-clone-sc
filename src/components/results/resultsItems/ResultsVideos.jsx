import React from "react";
import ReactPlayer from "react-player";
import ResultsSearch from "../resultsHeader/ResultsSearch";
import ResultsNav from "../resultsHeader/ResultsNav";
import { ResultsVideoLayout } from "./styles/ResultsVideos.styled";

export default function ResultsVideos({
  searchResults,
  searchTerm,
  getResults,
}) {
  const { results } = searchResults;
  console.log(results);

  return (
    <>
      <ResultsSearch />
      <ResultsNav
        searchTerm={searchTerm}
        searchResults={searchResults}
        getResults={getResults}
      />

      <ResultsVideoLayout>
        {results?.map((video, index) => (
          <div key={video.title}>
            <ReactPlayer
              url={video.additional_links?.[0].href}
              controls
              width="430px"
              height="250px"
            />
          </div>
        ))}
      </ResultsVideoLayout>
    </>
  );
}
