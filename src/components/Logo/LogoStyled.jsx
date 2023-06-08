import styled from '@emotion/styled';

export const LogoWraper = styled.img`
  background-color: yellow;
  transition: transform ${({ theme }) => theme.duration.main}
    ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  & svg {
    stroke: black;
  }
`;
