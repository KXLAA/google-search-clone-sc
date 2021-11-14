import { React } from "react";
import {
  SearchInput,
  SearchContainer,
  SearchButton,
  SearchLink,
  ButtonContainer,
  Logo,
} from "./styles/Search.styled";
import { useNavigate } from "react-router-dom";

export default function Search({ searchTerm, handleChange, getResults }) {
  const navigate = useNavigate();

  const getSearch = (e) => {
    e.preventDefault();
    navigate("/results");
    return getResults(`/search/q=${searchTerm}&num=30`);
  };

  return (
    <SearchContainer onSubmit={getSearch}>
      <Logo>GUNGLE</Logo>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ButtonContainer>
        <SearchButton type="submit">SEARCH</SearchButton>
        <SearchLink
          href="https://github.com/KXLAA/google-search-clone-sc"
          target="_blank"
        >
          CODE
        </SearchLink>
      </ButtonContainer>
    </SearchContainer>
  );
}
