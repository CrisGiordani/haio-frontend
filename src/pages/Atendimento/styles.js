import styled from 'styled-components';

export const Container = styled.div`

  width: 90%;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  flex: 1;
  
  justify-content: space-between;
  align-items: left;
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
    width:60%;
    display: flex;
    flex-direction: row;
    flex:1;
  }
  h3 {
    font-weight: 200;
    margin: 40px auto;
  }
`;
