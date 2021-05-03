import styled from "styled-components";

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


export const AddBalanceIcon = styled(ArrowUpwardIcon)`
  color: #00b894;
  text-shadow: 1px 1px 1px #646464;
`;

export const RemoveBalanceIcon = styled(ArrowDownwardIcon)`
  color: #d63031;
  text-shadow: 1px 1px 1px #646464;
`;

export const TotalBalanceIcon = styled(AttachMoneyIcon)`
  color: #fff;
`;

export const Container = styled.section`
  margin-top: -7.72rem;
  h2 {
    margin-top: 0.30rem;
    color: #e1e1e6;
  }

  @media (min-width: 800px) {
      width: 800px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      html{
        font-size: 83.5%;
      }
  }

`;

export const Card = styled.div`
  background-color: #6c5ce7;
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 1px #646464;

  h3 {
    font-weight: normal;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 1rem;
  }
  &.total {
    background-color: #00b894;
    color: #fff;
    
  }
`;