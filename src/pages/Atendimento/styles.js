import styled from 'styled-components';
import { device } from '../../devices';

export const Container = styled.div`
  width: 90%;
  max-width: 950px;
  display: flex;
  flex: 1;
  flex-direction: column;  
  
  @media ${device.mobile} {
    margin: 3em auto;
  }

  @media ${device.tablet} { 
    margin: 4em auto;
  }

  @media ${device.desktop} { 
    margin: 6em auto;
  }

  h3 {
    font-weight: 200;
    margin: 30px auto;
    
    @media ${device.mobile} {
      font-size: 1.4em;
    }
  
    @media ${device.tablet} { 
      font-size: 2em;
    }

  }

`;

export const RowBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  
  img {
    @media ${device.mobile} {
      margin: 30px 10px;
    }
  }

  span {
    @media ${device.mobile} {
      padding-top: 0px;
    }
    @media ${device.tablet} {
      padding-top: 90px;
    }
    @media ${device.desktop} {
      padding-top: 120px;
    }
    
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: left;

    .longButton {
      background-color: blue;

    }
  }

  
`;
