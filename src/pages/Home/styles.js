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

  h2 {
    width: 100%;
    @media ${device.mobile} {
      text-align: center;
      margin: 30px auto;
    }
    @media ${device.tablet} {
      text-align: left;
      margin: 50px 0 10px 0;
    }
    @media ${device.desktop} {
      margin: 50px 0 10px 0;
    }
  }
`;

export const RowBlock = styled.div`
  display: flex;
  flex-wrap: wrap; 

  img {
    @media ${device.mobile} {
      margin: 20px auto;
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

export const ColBlock = styled.div`

  display: flex;
  flex-direction: column;
  vertical-align: top;
  margin: 40px auto;

  @media ${device.mobile} {
    width: 90%;
  }
  @media ${device.tablet} {
    width: 80%;
  }
  @media ${device.desktop} {
    width: 60%;
  }

  span {
    display: block;
    @media ${device.mobile} {
      font-size: 0.8em;
      margin-bottom: 10px;
    }
    @media ${device.tablet} {
      font-size: 1.2em;
      margin-bottom: 12px;
    }
    @media ${device.desktop} {
      font-size: 1.1em;
      margin-bottom: 12px;
    }
  }

  form {
    display: flex;
    flex:1;
    margin-bottom: 8%;
  
    @media ${device.mobile} {
      align-items: center;
      flex-direction: column;
      input { padding: 16px 22px; }
    }
    @media ${device.tablet} {
      align-items: center;
      flex-direction: row;
      input { padding: 16px 22px; }
    }
    @media ${device.desktop} {
      align-items: center;
      flex-direction: row;
      input { padding: 18px 22px; }
    }

    .btBuscar {
      padding: 10px 18px;
      @media ${device.mobile} {
        margin: 12px 0 0;
      }
      @media ${device.tablet} {
        margin: 0 0 0 16px;
      }
      @media ${device.desktop} {
        margin: 0 0 0 16px;
      }
    }
  }
`;

export const Containeadsasdasdr = styled.div`

  width: 90%;
  

  @media ${device.mobile} {
    max-width: 375px;
    padding: 10px 0 10px 0;
  }

  @media ${device.tablet} { 
    max-width: 768px;
    padding: 40px 0 30px 0;
  }

  @media ${device.desktop} {
    max-width: 900px;
    padding: 60px 0 40px 0;
  }

  margin: 0 auto;
  display: flex;
  flex: 1;
  
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .divBody {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.mobile} {
      margin: 5% 0;
      flex-direction: column;
    }

    @media ${device.tablet} {
      margin: 5% 0;
      flex-direction: row;
    }

    @media ${device.desktop} {
      margin: 5% 0;
      flex-direction: row;
    }

    img {
      @media ${device.mobile} {
        margin: 20px;
      }
  
      @media ${device.tablet} {
        margin: 0;
      }
    }

    span {
      @media ${device.mobile} {
        text-align: center;
        font-size: 1em;
      }
      @media ${device.tablet} {
        text-align: left;
        font-size: 1em;
      }
      @media ${device.desktop} {
        text-align: left;
        font-size: 1em;
      }
      
    }
    

  }

  span {
  
    @media ${device.mobile} {
      color: black;
      margin: auto;
      margin-bottom: 12px;
      width:90%;
      text-align: center;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      font-size: 1em;
    }
  
    @media ${device.tablet} { 
      color: black;
      margin: 70px auto;
      text-align: left;
      margin-bottom: 12px;
      width:80%;
      font-style: normal;
      font-weight: 500;
      line-height: 180%;
      font-size: 1em;
    }
  
    @media ${device.desktop} {
      margin: 80px auto;
      width:60%;
      margin-bottom: 12px;
      text-align: left;
      font-size: 1em;
    }
  }

  
`;

export const Destaques = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  overflow: scroll;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${device.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }

`;

export const Card = styled.div`
  
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 1.3em;

  @media ${device.mobile} {
    width: 90%;
    margin-bottom: 10px;
    max-width: 230px;
  }
  @media ${device.tablet} {
    width: 30%;
    margin-bottom: 0;
    max-width: 220px;
  }
  @media ${device.desktop} {
    width: 30%;
    margin-bottom: 0;
    max-width: 280px;
  }

  background: #fff;

  border: 1px solid #7C7C7C;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  img {
    border-radius: 5px;
    float: left;
    width: 60px;
    height: 60px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  white-space: nowrap;

  width: 100%;
  align-items: left;
  justify-content: left;
  margin-left: 1.2em;
  
  strong {
    @media ${device.tablet} {
      width: 100%;
    }
    font-size:0.8em;
    margin-bottom: 4px;
  }
  score {
    @media ${device.tablet} {
      width: 100%;
    }
    @media ${device.desktop} {
      width: 100%;
    }
    font-size:0.8em;
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
    @media ${device.tablet} {
      width: 100%;
    }
    @media ${device.desktop} {
      width: 100%;
    }
    margin-top:4px;
    font-size:0.7em;
    color: #646464;
  }
`;