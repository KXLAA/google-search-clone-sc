import {
  SearchContainer,
  Logo,
  SearchInput,
  SearchButton,
} from "./styles/ResultsHeader.styled";
import { useNavigate } from "react-router-dom";

export default function ResultsSearch({
  searchTerm,
  getResults,
  handleChange,
}) {
  const navigate = useNavigate();
  const getSearch = (e) => {
    e.preventDefault();
    navigate("/results");
    return getResults(`/search/q=${searchTerm}&num=30`);
  };

  return (
    <SearchContainer onSubmit={getSearch}>
      <Logo onClick={() => navigate("/")}>GUNGLE</Logo>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchButton>SEARCH</SearchButton>
    </SearchContainer>
  );
}
