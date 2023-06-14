import styled from '@emotion/styled';

export const ServicesList = styled.ul`
  color: black;
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[3]};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px 20px;
`;

export const ServicesItems = styled.ul`
  border: 1px solid green;
  background-color: light-grey;
  border-radius: 5px;
  width: 45%;
  min-height: 200px;
`;
