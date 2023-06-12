import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavEl = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 60px;
    align-items: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: 80px;
    align-items: center;
  }
`;

export const Li = styled.li`
  list-style: none;
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-size: 32px;
  line-height: 1.38;
  transition: all 250ms;

  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[3]};

  &:hover {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: 1.38;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: 1.35;

    &:hover {
      font-weight: 400;
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;
