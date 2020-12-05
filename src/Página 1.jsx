import React from "react";

import { Link } from "react-router-dom";

function Page1() {
  return (
    <>
      <p>Página 1</p>
      <Link to="/"> HomePage </Link>
      <Link to="/Page2"> Page2 </Link>
    </>
  );
}

export default Page1;
