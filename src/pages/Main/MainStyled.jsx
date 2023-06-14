import styled from '@emotion/styled';
import heroImg from '../../images/heroImg.jpg';

export const MainWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Hero = styled.div`
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

  width: 100%;
  height: 300px;
  margin: 10px auto;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  color: white;
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[7]};
  margin-bottom: 10px;
`;

export const HeroSubtitle = styled.p`
  color: white;
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;
