import { FiPhone, FiMail } from 'react-icons/fi';
import Container from '../Container/Container';
import Nav from 'components/Nav/Nav';
import Logo from 'components/Logo/Logo';

import {
  HeaderWrapper,
  HeaderLogoWrapper,
  HeaderText,
  HeaderTitle,
  HeaderSubtitle,
  HeaderContacts,
  HeaderList,
} from './HeaderStyled';

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <HeaderLogoWrapper>
          <Logo />
          <HeaderText>
            <HeaderTitle>СОЛОПІХІН О.Л.</HeaderTitle>
            <HeaderSubtitle>Митний брокер</HeaderSubtitle>
          </HeaderText>
        </HeaderLogoWrapper>

        <Nav />

        <HeaderContacts>
          <HeaderList>
            <a href="mailto:info@devstudio.com">
              <FiMail /> luckybroke@ukr.net
            </a>
          </HeaderList>
          <HeaderList>
            <a href="tel:+380679515231">
              <FiPhone />
              +38 097 951 52 31
            </a>
          </HeaderList>
        </HeaderContacts>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
