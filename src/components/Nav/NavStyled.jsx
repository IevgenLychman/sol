import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavEl = styled.nav`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 80px;
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

  transition: transform ${({ theme }) => theme.duration.main}
    ${({ theme }) => theme.transition.main};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[2]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: 1.38;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: 1.35;
  }
`;
