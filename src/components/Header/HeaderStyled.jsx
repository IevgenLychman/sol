import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:after {
    position: absolute;
    content: '';
    z-index: -1;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-left-width: 0px;
    border-right-width: 1248px;
    border-top: 109px solid #ffff0040;
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
  margin-left: 20px;
`;

export const HeaderTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 1.38;
  letter-spacing: 0.04em;
`;

export const HeaderSubtitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.38;
  letter-spacing: 0.04em;
`;

export const HeaderContacts = styled.ul`
  display: flex;

  text-decoration: none;
`;

export const HeaderList = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
