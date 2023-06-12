import styled from '@emotion/styled';

export const LogoWraper = styled.div`
  border-radius: 50%;
  background-color: yellow;
  transition: transform ${({ theme }) => theme.duration.main}
    ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  & svg {
    stroke: black;
    fill: black;
  }
`;
