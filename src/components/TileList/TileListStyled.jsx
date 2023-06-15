import styled from '@emotion/styled';

export const TileListEl = styled.ul`
  color: black;
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[3]};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px 20px;
`;

export const TileItems = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ffd400;
  background-color: light-grey;
  border-radius: 5px;
  width: 45%;
  min-height: 200px;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
`;
export const TileItemsTitle = styled.h3`
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;

export const TileItemsSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;
