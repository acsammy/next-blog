import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    > img {
      height: 15rem;
      width: 15rem;
      border-radius: 50%;
    background-color: ${theme.colors.white};

    }
  `}
`;
