import styled from "styled-components";

export const ResultsAllLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
  justify-content: space-between;
`;

export const ItemContainer = styled.div`
  width: 50%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const ItemLink = styled.a`
  color: gray;
  font-size: 0.6rem;
`;

export const ItemTitle = styled.h3`
  color: blue;
  cursor: pointer;
  font-weight: 500;
  padding-bottom: 0.3rem;
`;

export const ItemDescription = styled.p`
  color: #333533;
`;
