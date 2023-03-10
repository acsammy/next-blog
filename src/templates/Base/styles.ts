import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
`;

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge};
    background: ${theme.colors.white};
    padding: 0 ${theme.spacings.large};
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xhuge};
  `}
`;

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;
