import styled, {css} from 'styled-components';

import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}


export const Container = styled.div<ContainerProps>`
  width: 100%;

  display: flex;
  align-items: center;
  background-color: #fff;
  border: 0.2rem solid #F0F2F5;
  border-radius: 0.2rem;
  padding: 0.8rem;
  

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}
  ${props => props.isFocused && css`
    border: 0.2rem solid #6c5ce7;
    color: #6c5ce7;
  `}
  ${props => props.isFilled && css`
    color: #6c5ce7;
  `}
  
  input {
    width: 100%;
    height: 100%;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button,
  input::-webkit-calendar-picker-indicator
   {
    -webkit-appearance: none;
    display: none;
    margin: 0;
  }
`;

export const Error = styled(Tooltip)`
  span {
    background-color: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
  
`