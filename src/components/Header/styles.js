import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const MenuItem = styled(Link)`
  font-size: 0.9em;
  font-style: normal;
  font-weight: normal;
  color: #000;
  text-decoration: none;
`;

export const Content = styled.div`
  height: 64px;
  width: 90%; 
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding-right:50px;

    img {
      margin-right: 20px;
      max-height: 45px;
      padding-right: 20px;
    }

  }
  
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: left;
    margin-left: 10px;

    strong {
      display: block;
      font-size: 1em;
      color: #333;
    }

    a {
      display: block;
      font-size: 0.7em;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  img {
    height: 32px;
    border-radius: 50%;
  }
`;
