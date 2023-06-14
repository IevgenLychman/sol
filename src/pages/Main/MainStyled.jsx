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
  height: 500px;
  margin: 10px 0 auto;
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
  margin-bottom: 70px;
`;

export const HeroSubtitle = styled.p`
  color: white;
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[5]};
`;

export const Services = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 38px;
`;

export const ServicesTitle = styled.h2`
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;

export const PotentialСustomers = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border: 3px solid #ffd400;
`;

export const Diva2 = styled.div`
  border: 3px solid red;
  display: flex;
`;

export const Img = styled.img`
  border: 3px solid green;
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

  width: 200px;
  height: 200px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`;
