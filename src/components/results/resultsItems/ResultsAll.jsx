import React from "react";
import {
  ResultsAllLayout,
  ItemContainer,
  ItemLink,
  ItemTitle,
  ItemDescription,
} from "./styles/ResultsAll.styled";
import ResultsSearch from "../resultsHeader/ResultsSearch";
import ResultsNav from "../resultsHeader/ResultsNav";

export default function ResultsAll({
  searchResults,
  searchTerm,
  getResults,
  handleChange,
  setSearchTerm,
}) {
  const { results } = searchResults;
  return (
    <>
      <ResultsSearch
        searchTerm={searchTerm}
        searchResults={searchResults}
        getResults={getResults}
        handleChange={handleChange}
        setSearchTerm={setSearchTerm}
      />
      <ResultsNav
        searchTerm={searchTerm}
        searchResults={searchResults}
        getResults={getResults}
      />

      <ResultsAllLayout>
        {results?.map(({ link, title, description }) => (
          <ItemContainer>
            <ItemLink href={link} target="_blank" rel="noreferrer">
              {link}
            </ItemLink>
            <ItemTitle>
              <a href={link} target="_blank" rel="noreferrer">
                {title}
              </a>
            </ItemTitle>
            <ItemDescription>{description}</ItemDescription>
          </ItemContainer>
        ))}
      </ResultsAllLayout>
    </>
  );
}
