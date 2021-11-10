import React from "react";
import { ResultsImagesLayout } from "./styles/ResultsImages.styled";
import ResultsSearch from "../resultsHeader/ResultsSearch";
import ResultsNav from "../resultsHeader/ResultsNav";

export default function ResultsImages({
  searchResults,
  searchTerm,
  getResults,
}) {
  const { image_results } = searchResults;

  return (
    <>
      <ResultsSearch />
      <ResultsNav
        searchTerm={searchTerm}
        searchResults={searchResults}
        getResults={getResults}
      />

      <ResultsImagesLayout>
        {image_results.map(({ image, link: { href, title } }, index) => (
          <a
            style={{ width: "30%" }}
            href={href}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image?.src} alt={title} loading="lazy" />
            <p>{title}</p>
          </a>
        ))}
      </ResultsImagesLayout>
    </>
  );
}
