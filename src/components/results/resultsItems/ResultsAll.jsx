import React from "react";
import {
  ResultsAllLayout,
  ItemContainer,
  ItemLink,
  ItemTitle,
  ItemDescription,
} from "./styles/ResultsAll.styled";

export default function ResultsAll({ searchResults }) {
  const { results } = searchResults;
  console.log(results);
  return (
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
  );
}
