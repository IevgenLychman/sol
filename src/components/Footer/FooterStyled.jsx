import styled from '@emotion/styled';

export const FooterWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:after {
    position: absolute;
    content: '';
    z-index: -1;
    width: 0;
    height: 75px;
    border: 0 solid transparent;
    border-left-width: 440px;
    border-right-width: 0px;
    border-top: 30px solid #ffd400;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      border-left-width: 738px;
      border-top: 40px solid #ffd400;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      border-left-width: 1250px;
    }
  }
`;
