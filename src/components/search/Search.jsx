import { React } from "react";
import {
  SearchInput,
  SearchContainer,
  SearchButton,
  ButtonContainer,
  Logo,
} from "./styles/Search.styled";
import { useNavigate } from "react-router-dom";

export default function Search({
  searchTerm,
  handleChange,
  getResults,
  setSearchTerm,
}) {
  const navigate = useNavigate();

  const getSearch = (e) => {
    e.preventDefault();
    navigate("/results");
    setSearchTerm("");
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
        <SearchButton type="submit">RANDOM</SearchButton>
      </ButtonContainer>
    </SearchContainer>
  );
}
