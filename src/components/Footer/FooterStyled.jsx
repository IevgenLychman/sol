import styled from '@emotion/styled';

export const FooterWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    position: absolute;
    content: '';
    z-index: -1;
    width: 0;
    height: 75px;
    border: 0 solid transparent;
    border-left-width: 0px;
    border-right-width: 440pxpx;
    border-bottom: 30px solid #ffd400;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      border-right-width: 738px;
      border-bottom: 40px solid #ffd400;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      border-right-width: 1250px;
    }
  }
`;

export const FooterCopyRight = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.38;
  letter-spacing: 0.04em;
`;
