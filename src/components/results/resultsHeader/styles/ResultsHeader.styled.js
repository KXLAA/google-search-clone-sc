import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  padding-top: 2rem;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-right: 2rem;
`;

export const SearchInput = styled.input`
  width: 50%;
  padding: 1rem;
`;

export const SearchButton = styled.button`
  text-align: center;
  margin-left: 1rem;
  cursor: pointer;
  background: #242423;
  color: white;
  font-weight: bold;
  border: none;
  padding: 1rem 3rem;
`;

export const Navigation = styled.nav`
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: solid black 0.15rem;
  gap: 2rem;
`;

export const NaviLink = styled(Link)`
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;
