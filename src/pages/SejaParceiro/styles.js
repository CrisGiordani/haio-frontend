import styled from 'styled-components';
import { device } from '../../devices';

import Button from '../../components/Button';

export const ModalContainer = styled.div`

  width: 100%;
  max-width: 950px;
  margin: 0 auto;

  display: flex;
  flex: 1;
  
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 40px 0;

  flex-direction: column;

  div {

    display: flex;
    flex: 1;
    justify-content: space-between;
    
  }

  form {
    width:100%;
    display: flex;
    flex-direction: column;
    flex:1;

    label {
      
      @media ${device.mobile} {
        font-size: 0.8em;
      }
  
      @media ${device.tablet} { 
        font-size: 1em;
      }
  
      @media ${device.desktop} { 
        font-size: 1em;
      }

      margin: 12px 0 8px;
    }
    input {
      height: 32px;
    }
    span {
      margin-top: 4px;
      text-align: left;
      font-style: normal;
      font-weight: 200;
      font-size: 0.8em;
      color: #444;
    }
  }

  h1 {
    font-weight: 400;
    margin: 30px auto;

    strong {
      font-weight: 600;
      color: #BE0E02;
    }
  }

`;


export const SubmitButton = styled(Button)`
    min-width: 100%;
    margin-top: 1em; 
    padding: 12px 20px;
    @media ${device.mobile} {
      font-size: 0.8em;
    }

    @media ${device.tablet} { 
      font-size: 1em;
    }

    @media ${device.desktop} { 
      font-size: 1em;
    }
`;