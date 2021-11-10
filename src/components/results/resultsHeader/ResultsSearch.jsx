import {
  SearchContainer,
  Logo,
  SearchInput,
  SearchButton,
} from "./styles/ResultsHeader.styled";

export default function ResultsSearch() {
  return (
    <SearchContainer>
      <Logo>GUNGLE</Logo>
      <SearchInput />
      <SearchButton>SEARCH</SearchButton>
    </SearchContainer>
  );
}
