import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles}{
      margin: 0;
      margin-top: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.small};
    }

    a{
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;

    }
    a:hover {
      color: ${theme.colors.secondary};
    }

    &:hover {
      transform: scale(1.05);
      transition: all 300ms ease-in-out;
    }
  `}
`;

export const Cover = styled.img`
  max-width: 100%;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const Excerpt = styled.p``;
