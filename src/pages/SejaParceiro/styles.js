import styled from 'styled-components';

export const ModalContainer = styled.div`

  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  flex: 1;
  
  justify-content: space-between;
  align-items: center;
  padding: 60px 0 40px 0;

  flex-direction: column;

  div {

    display: flex;
    flex: 1;
    justify-content: space-between;
    
  }

  span {
    margin: 80px auto;
    width:60%;
    text-align: left;
    font-style: normal;
    font-weight: 500;
    font-size: 1em;
    margin-bottom: 12px;
    line-height: 180%;
  }

  form {
    width:90%;
    display: flex;
    flex-direction: column;
    flex:1;

    label {
      font-size: 1em;
      margin-bottom: 8px;
    }
  }

  h1 {
    font-weight: 400;
    margin: 40px auto;

    strong {
      font-weight: 600;
      color: #BE0E02;
    }
  }

`;
