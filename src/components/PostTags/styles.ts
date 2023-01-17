import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    span {
      margin: 0 0.5rem 0 1rem;
    }

    span::before {
      content: ' ';
    }

    span::after {
      content: ', ';
    }

    span:last-child::after {
      content: '';
    }

    a {
      transition: all 300ms ease-in-out;

      &::hover {
        filter: brightness(80%)
      }
    }

  `}
`;
