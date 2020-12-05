import React from "react";

import Page from "./style";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Page>
        <p> You are into HomePage</p>
        <Link to="/Page1">Go to Page 1</Link>
        <Link to="/Page2">Go to Page 2</Link>
      </Page>
    </>
  );
}

export default HomePage;
