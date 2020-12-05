import React from "react";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <p>HomePage</p>
      <Link to="/Page1">Page1</Link>
      <Link to="/Page2">Page2</Link>
    </>
  );
}

export default HomePage;
