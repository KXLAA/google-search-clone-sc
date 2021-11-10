import {
  SearchContainer,
  Logo,
  SearchInput,
  SearchButton,
} from "./styles/ResultsHeader.styled";
import { useNavigate } from "react-router-dom";

export default function ResultsSearch() {
  const navigate = useNavigate();

  return (
    <SearchContainer>
      <Logo onClick={() => navigate("/")}>GUNGLE</Logo>
      <SearchInput />
      <SearchButton>SEARCH</SearchButton>
    </SearchContainer>
  );
}
