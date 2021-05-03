import styled from "styled-components";

import AddIcon from '@material-ui/icons/Add';



export const NewTransactionIcon = styled(AddIcon)`
  color: #00b894;
`;

export const Container = styled.section`
  display: block;
  width: 100%;  
  overflow-x: auto;
  
  @media (min-width: 800px) {
    width: 800px;
    
    
  }


  & button {
    background-color: rgba(0,0,0,0);
    color: #00b894;
    outline: none;
    margin: 1.2rem 0;

    &:hover {
      cursor: pointer;
    } 
  }
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: #fff;

  }
`;