import styled from '@emotion/styled';

export const LogoWraper = styled.div`
  transition: transform ${({ theme }) => theme.duration.main}
    ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  & svg {
    fill: black;
  }
`;
