import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #6c5ce7;
    position: absolute;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.9rem;
    bottom: calc(100% + 12px);
    color: #fff;
    text-align: center;
    
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease-in-out;

    &::before {
      content: '';
      border-style: solid;
      border-color: #6c5ce7 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

    }
  }

  &:hover span {
      opacity: 1;
      visibility: visible;
    }
`;