import { React } from "react";
import {
  SearchInput,
  SearchContainer,
  SearchButton,
  ButtonContainer,
  Logo,
} from "./styles/Search.styled";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../utilities/Loading";

export default function Search({
  searchTerm,
  handleChange,
  getResults,
  isLoading,
  results,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRoute = () => {
    navigate("/results");
  };

  return (
    <SearchContainer>
      <Logo>GUNGLE</Logo>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ButtonContainer>
        <SearchButton type="submit" onClick={handleRoute}>
          SEARCH
        </SearchButton>
        <SearchButton type="submit" onClick={handleRoute}>
          RANDOM
        </SearchButton>
      </ButtonContainer>
    </SearchContainer>
  );
}
