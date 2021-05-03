import styled from "styled-components";

import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

export const RemoveTransactionIcon = styled(RemoveCircleOutlineIcon)`
    color: #d63031;
    text-shadow: 1px 1px 1px #646464;
`;

export const Container = styled.tbody`
    td {
        background-color: rgba(32,32,36, .8);
        padding: 1rem 2rem;

        &.expense {
          color: #dd3333;
        }

        &.income {
          color: #04d361;
        }

        &.date {
          color: rgba(255,255,255, 0.5);
        }
      
    
        &:first-child {
          border-radius: 0.25rem 0 0 0.25rem;
        }

        &:last-child {
          border-radius: 0rem 0.25rem 0.25rem 0rem;
        }
      }

    & tr{
      opacity: 0.6;
      
      &:hover {
        opacity: 1;
      }
    }`;

export const RemoveItem = styled.p``