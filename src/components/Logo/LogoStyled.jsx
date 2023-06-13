import styled from '@emotion/styled';

export const LogoWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  transition: transform ${({ theme }) => theme.duration.main}
    ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  & svg {
    stroke: black;
    fill: black;
    width: 55px;
    height: 55px;
  }
`;
