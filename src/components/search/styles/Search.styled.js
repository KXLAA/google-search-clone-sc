import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
  width: 50%;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;
export const SearchButton = styled.button`
  cursor: pointer;
  background: #242423;
  color: white;
  font-weight: bold;
  border: none;
  padding: 1rem 3rem;
`;

export const SearchLink = styled.a`
  cursor: pointer;
  background: #242423;
  color: white;
  font-weight: bold;
  border: none;
  padding: 1rem 3rem;
`;
