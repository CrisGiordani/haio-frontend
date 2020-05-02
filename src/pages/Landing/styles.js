import styled from 'styled-components';

export const Container = styled.div`

  width: 90%;
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
    justify-content: space-between;
    flex: 1;
  
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

  h2 {
    width: 100%;
    margin: 80px 0 40px 0;
  }
  
`;

export const BusinessList = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Business = styled.div`
  width: 30%;
  max-width: 260px;
  display: flex;
  flex: 1;
  justify-content: space-between;

  padding: 20px;
  background: #fff;

  border: 1px solid #7C7C7C;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  img {
    width:25%;
    max-width: 50px;
    max-height: 50px;
    margin-right: 15px;
    float: left;
  }
`;
export const Info = styled.div`
  flex-direction: column;
  align-items: left;
  border-left: solid 1px #eee;
  padding-left: 15px;

  
  strong {
    font-size:0.8em;
    margin-bottom: 4px;
  }
  score {
    font-size:0.8em;
    justify-content: center;
    align-items: center;
    color: #646464;

    img {
      float: left;
      margin:0;
      height: 13px;
      width: 13px;
    }

    nota {
      color: #E7A74E;
      margin-left: 3px;
      margin-right: 8px;
    }

  }
  delivery {
    font-size:0.8em;
    color: #646464;
  }
`;