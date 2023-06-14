import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ffd400;
  padding-bottom: 5px;
  &:after {
    position: absolute;
    content: '';
    z-index: -1;
    width: 0;
    height: 75px;
    border: 0 solid transparent;
    border-left-width: 430px;
    border-right-width: 0px;
    border-top: 30px solid #ffd400;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      border-left-width: 728px;
      border-top: 40px solid #ffd400;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      border-left-width: 1240px;
    }
  }
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderText = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.38;
  letter-spacing: 0.04em;

  border-bottom: 2px solid black;
  border-left: 2px solid black;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const HeaderSubtitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.38;
  letter-spacing: 0.04em;
  border-left: 2px solid black;
  padding-left: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
`;

export const HeaderContacts = styled.ul`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-right: 15px;
  }
`;

export const HeaderList = styled.li`
  display: flex;
`;

export const HeaderListText = styled.a`
  transition: transform ${({ theme }) => theme.duration.main}
    ${({ theme }) => theme.transition.main};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  & svg {
    margin-right: 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-decoration: none;
    color: inherit;
    font-family: ${({ theme }) => theme.fonts.main.medium};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.38;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-family: ${({ theme }) => theme.fonts.main.medium};
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;
