import React from "react";

import Page from "./style";

import { Link } from "react-router-dom";

function Page2() {
  return (
    <>
      <Page>
        <p>You are into Page 2</p>
        <Link to="/"> Go to HomePage </Link>
        <Link to="/Page1"> Go to Page 1 </Link>
      </Page>
    </>
  );
}

export default Page2;
