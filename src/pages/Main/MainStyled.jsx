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
  padding: 110px 0 100px;
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
  padding-top: 40px;
`;

export const ServicesTitle = styled.h2`
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;

export const PotentialСustomers = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
`;

export const PotentialСustomersTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  margin-bottom: 20px;
`;

export const Diva1 = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffd40057;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  &.rev {
    flex-direction: row-reverse;
  }
`;

export const Diva2 = styled.div`
  display: flex;
  flex-direction: column;
  &.rev {
    flex-direction: row-reverse;
  }
`;

export const Img = styled.img`
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

  width: 800px;
  height: 300px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`;
