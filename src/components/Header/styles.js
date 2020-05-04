import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from '../../devices';

export const Container = styled.div`
  background: #fff;
`;

export const MenuItem = styled(Link)`

  @media ${device.mobile} {
    display:none;
  }

  @media ${device.tablet} { 
    display:flex;
    font-size: 1em;
    font-style: normal;
    font-weight: normal;
    color: #000;
    text-decoration: none;
  }
  
`;

export const Content = styled.div`
  height: 64px;
  width: 90%; 
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobile} {
    height: 50px;
    width: 90%; 
  }

  @media ${device.tablet} { 
    height: 58px;
    width: 90%; 
  }

  @media ${device.desktop} {
    height: 64px;
  }


  nav {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding-right: 50px;

    img {
      margin-right: 20px;

      @media ${device.mobile} {
        max-height: 15px;
        margin-left: 0;
      }

      @media ${device.tablet} {
        max-height: 25px;
        margin-left: 0;
      }

      @media ${device.desktop} {
        max-height: 30px;
      }

    }

  }
  
  aside {
    align-items: center;

    @media ${device.mobile} {
      display:none;
    }

    @media ${device.tablet} {
      display:flex;
    }
  }

  colapsed {
    @media ${device.mobile} {
      display:flex;
    }
    @media ${device.tablet} {
      display:none;
    }
  }

`;

export const MenuMobile = styled.div`
  position: absolute;
  display: flex;
  flex: 1;
  width: 130px;
  height: auto;
  overflow: auto;
  right: -4px;
  top: 0;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  background: rgba(190, 14, 2, 1);
  display: ${(props) => (props.visible ? "block" : "none")};
`;

export const MenuMobileItem = styled(Link)`
  display:flex;
  padding: 8px;
  border-bottom: solid 1px rgba(140, 14, 2, 0.6);
  font-size: 1em;
  font-style: normal;
  font-weight: normal;
  color: #FFF;
  text-decoration: none;

  :last-child {
    border-bottom: none;
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
