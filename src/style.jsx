import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background: #3d3d3d;
  color: #f7f7f7;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f7f7f7;
    height: 100px;
    text-transform: uppercase;
    border: 1px solid #36ccfc;
    margin: 10px;
    width: 100%;
    transition: all 0.4s;
    letter-spacing: 3px;
    font-size: 20pt;
  }

  a {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f7f7f7;
    text-transform: uppercase;
    height: 100px;
    width: 25%;
    border: 1px solid #36ccfc;
    transition: all 0.4s;
    letter-spacing: 3px;
    font-size: 20pt;
    text-decoration: none;

    :hover {
      background: #36ccfc;
      color: #3d3d3d;
    }
  }
`;

export default Page;
