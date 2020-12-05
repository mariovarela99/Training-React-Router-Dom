import React from "react";

import { Link } from "react-router-dom";

function Page2() {
  return (
    <>
      <p>Página 2</p>
      <Link to="/"> HomePage </Link>
      <Link to="/Page1"> Page 1 </Link>
    </>
  );
}

export default Page2;
