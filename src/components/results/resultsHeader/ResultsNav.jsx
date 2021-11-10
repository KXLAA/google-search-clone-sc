import React from "react";
import { Navigation, NaviLink } from "./styles/ResultsHeader.styled";
import { useNavigate } from "react-router-dom";

export default function ResultsNav({
  results,
  searchTerm,
  searchResults,
  getResults,
}) {
  const navigate = useNavigate();
  const getAll = () => {
    navigate("/results/all");
  };

  const getVids = () => {
    navigate("/results/videos");
    return getResults(`/search/q=${searchTerm} videos`);
  };

  return (
    <Navigation>
      <NaviLink to="/results/all" onClick={getAll}>
        ALL
      </NaviLink>
      <NaviLink to="/results/videos" onClick={getVids}>
        VIDEOS
      </NaviLink>
      <NaviLink to="/results/news">NEWS</NaviLink>
      <NaviLink to="/results/images">IMAGES</NaviLink>
    </Navigation>
  );
}
