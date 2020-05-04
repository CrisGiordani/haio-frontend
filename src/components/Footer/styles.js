import styled from "styled-components";
import { device } from '../../devices';

export const Container = styled.div`
  width:100%;
  margin-top: 60px;
  background: #fff;
  flex-direction: column;
  border-top: 1px solid #B5B5B5;
  
`;
export const Navegacao = styled.div`
  width: 100%; 
  max-width: 950px;

  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ColBlock = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: top;
  text-align: left;

  width: 32%;
  
  @media ${device.mobile} {
    min-width: 260px;
  }

  @media ${device.tablet} { 
    min-width: 220px;
  }

  padding: 20px 40px 50px;
  overflow: auto;
  
  strong {
    margin: 25px 0;
    font-size: 1em;
  }

  ul li {
    list-style: none;
    font-size: 0.9em;
    font-weight: 200;
    margin-top: 10px;
  }

  social {
    width:100%;
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 25%;
      max-width: 70px;
    }
  }
`;

export const Copyright = styled.div`
  width: 100%;
  border-top: 1px solid #B5B5B5;
  padding: 15px 0;
  color: #BBB;
  text-align: center;
  

  @media ${device.mobile} {
    font-size: 0.5em;
  }

  @media ${device.tablet} { 
    font-size: 0.7em;
  }

`;
