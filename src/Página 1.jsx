import React from "react";

import Page from "./style";

import { Link } from "react-router-dom";

function Page1() {
  return (
    <>
      <Page>
        <p>You are into Page 1</p>
        <Link to="/">Go to HomePage </Link>
        <Link to="/Page2"> Go to Page2 </Link>
      </Page>
    </>
  );
}

export default Page1;
