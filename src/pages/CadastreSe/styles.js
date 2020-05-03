import styled from 'styled-components';

export const ModalContainer = styled.div`

  width: 100%;
  height: 400px;
  max-width: 900px;

  display: flex;
  flex: 1;
  
  justify-content: space-between;
  align-items: center;

  flex-direction: row;

  img {
    max-width:35%;
  }
  div {
    
    background-color: #FFF;
    margin: 4px 0 0 40%;
    height: calc(100% - 3px);
    position: absolute;
    overflow: auto;
    padding: 40px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);

    img {
      max-width:90%;
    }

    h2 {
      font-weight: 400;
      margin: 30px auto;

      strong {
        font-weight: 600;
        color: #BE0E02;
      }
    }
    button {
      width: 90%;
      height: 25px;
      background-color: #fff;
      border: solid 1px gray;
      border-radius: 4px;
      margin-bottom: 14px;
      font-size: 1em;
      display: flex;
      flex: 1;
      align-items: center;    
      justify-content: center;
    }

    button:last-child {
      margin-top: 25px;
    }
    

  }
`;