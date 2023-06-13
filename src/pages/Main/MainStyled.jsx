import styled from '@emotion/styled';
import heroImg from '../../images/heroImg.jpg';

export const Wrap = styled.div`
  background-color: grey;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;

  text-align: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  margin: 10px auto;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
`;

export const HeroMainText = styled.h1`
  color: white;
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[7]};
`;
