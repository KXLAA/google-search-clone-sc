import React from "react";
import { Navigation, NaviLink } from "./styles/ResultsHeader.styled";

export default function ResultsNav() {
  return (
    <Navigation>
      <NaviLink to="/results">ALL</NaviLink>
      <NaviLink to="/results/videos">VIDEOS</NaviLink>
      <NaviLink to="/results/news">NEWS</NaviLink>
      <NaviLink to="/results/images">IMAGES</NaviLink>
    </Navigation>
  );
}
