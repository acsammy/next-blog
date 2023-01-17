import styled, { css, DefaultTheme } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
  theme: DefaultTheme;
};

const wrapperChanger = (
  menuvisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuvisible ? '0' : '-30rem;'};
  overflow-y: ${menuvisible ? 'auto' : 'hidden'};

  @media ${theme.media.lteMedium} {
    left: ${menuvisible ? '0' : '-32rem;'};
  }
`;

const OpenCloseChanger = (
  menuvisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuvisible ? '26rem' : '1rem;'};
  color: ${menuvisible ? theme.colors.secondary : theme.colors.white};

  @media ${theme.media.lteMedium} {
    left: ${menuvisible ? '26rem' : '-.5rem;'};
  }
`;

export const Wrapper = styled.div<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    overflow-y: auto;

    ${wrapperChanger(menuVisible, theme)}
  `}
`;

export const Nav = styled.nav`
  margin: auto;
  width: 100%;
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xlarge};

      img {
        border: 0.5rem solid ${theme.colors.secondary};
      }
    }
  `}
`;

export const OpenClose = styled.a<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 26rem;
    transition: all 300ms ease-in-out;
    ${OpenCloseChanger(menuVisible, theme)}
  `}
`;
