import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const HeaderText = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export const HeaderTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.main.bold};
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
  margin-left: 300px;
  text-decoration: none;
`;

export const HeaderList = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
