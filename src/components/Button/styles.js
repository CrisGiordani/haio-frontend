import styled from 'styled-components';
import { device } from '../../devices';

export const Container = styled.div`

  background: #BE0E02;
  border-radius: 3px;
  white-space: nowrap;
  max-width: 140px;

  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media ${device.mobile} {
    padding: 6px 10px;
  }
  @media ${device.tablet} {
    padding: 10px 25px;
  }

`;

export const Text = styled.text`
  display: flex;
  flex: 1;
  align-items: center;    
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
`;
