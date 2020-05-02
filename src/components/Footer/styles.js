import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  margin-top: 90px;
  background: #fff;
  flex-direction: column;
  border-top: 1px solid #B5B5B5;
  
`;
export const Navegacao = styled.div`
  width: 100%; 
  max-width: 900px;
  justify-content: space-between;
`;

export const Bloco = styled.div`
  padding: 0 40px 40px 40px;
  overflow: auto;
  flex-direction: column;
  text-align: left;
  border-right: 1px solid #B5B5B5;
  :last-child {
    border-right:none;
    justify-content: center;
    align-items: center;
  }
  
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
      height: 70%;
    }
  }
`;

export const Copyright = styled.div`
  width: 100%;
  border-top: 1px solid #B5B5B5;
  padding: 10px 0;
  text-align: center;
  font-size: 0.7em;
`;
