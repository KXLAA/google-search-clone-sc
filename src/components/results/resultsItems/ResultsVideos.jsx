import React from "react";
import ReactPlayer from "react-player";

export default function ResultsVideos({ searchResults }) {
  const { results } = searchResults;
  console.log(results);

  return (
    <>
      <div className="flex flex-wrap">
        {results?.map((video, index) => (
          <div key={index}>
            <ReactPlayer
              url={video.additional_links?.[0].href}
              controls
              width="344px"
              height="200px"
            />
          </div>
        ))}
      </div>
    </>
  );
}
