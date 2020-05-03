import styled from 'styled-components';

export const ModalContainer = styled.div`

  width: 100%;
  max-width: 900px;
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
    width:90%;
    display: flex;
    flex-direction: column;
    flex:1;

    label {
      font-size: 1em;
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
