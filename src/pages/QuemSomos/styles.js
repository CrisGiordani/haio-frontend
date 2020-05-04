import styled from 'styled-components';
import { device } from '../../devices';

export const Container = styled.div`
  width: 90%;
  max-width: 950px;
  display: flex;
  flex: 1;
  flex-direction: column;  
  
  @media ${device.mobile} {
    margin: 0 auto;
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

  img {
    @media ${device.mobile} {
      margin: auto;
    }
  }

  span {
    width:60%;
    text-align: left;
    font-style: normal;
    font-weight: 500;
    
    line-height: 180%;
    vertical-align: top;
    
    @media ${device.mobile} {
      font-size: 1.1em;
      margin: 3em auto 12px;
    }
  
    @media ${device.tablet} { 
      font-size: 1.2em;
      margin: 2em auto 12px;
    }
   
  }
  
  .foto {
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
  }
`;

export const RowBlockReverse = styled(RowBlock)`
  display: flex;
  flex-wrap: wrap-reverse; 
`;
