import styled from "styled-components";

export const Container = styled.thead`
  & th {
    background-color: rgba(41, 41, 46, 0.6);
    
    font-weight: normal;

    padding: 1rem 2rem;

    text-align: left;


    &:first-child {
      border-radius: 0.25rem 0 0 0.25rem;
    }

    &:last-child {
      border-radius: 0rem 0.25rem 0.25rem 0rem;
    }
  }

`;