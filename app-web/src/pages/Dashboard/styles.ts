import styled from "styled-components";

export const Container = styled.div`
  width: min(90vw, 500px);
  height: 100%;
  margin: auto;
  z-index: 999;
  h2 {
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;
    color: #a8a8a6;
  }
  @media (min-width: 800px) {
      width: 800px;
      html{
        font-size: 83.5%;

      }
      
      .balance {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
      }

      .transaction table{
        
      }
      
    }

`;

export const Overlay = styled.div`
  display: block;
  position:absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
`;

export const Content = styled.div`
  background-color: #f0f2f5;
  padding: 2.4rem 4.8rem;
  max-width: 500px;
  width: 90%;
  z-index: 1;
`;

export const ModalForm = styled.div`
  h2 {
    margin-top: 0;
    color: #121214;
    font-size: 3rem;
    font-weight: 200;
  }

`;

export const InputGroup = styled.div`
  padding: 0.2rem;
`;

export const ButtonGroup = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    
    .submit {
      background-color: #04d361;
      border: 0.2rem solid #04d361;
      color: #fff;
      &:hover {
        color: #04d361;
      }
    }

    .cancel {
      border: 0.2rem solid #dd3333;
      color: #dd3333;

      &:hover {
        color: #e1e1e6;
        background-color: #dd3333;
      }
    }
`;


