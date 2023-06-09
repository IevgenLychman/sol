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
  HeaderListText,
} from './HeaderStyled';

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <HeaderLogoWrapper>
          <Logo />
          <HeaderText>
            <HeaderTitle>СОЛОПІХІН О.Л.</HeaderTitle>
            <HeaderSubtitle>МИТНИЙ БРОКЕР</HeaderSubtitle>
          </HeaderText>
        </HeaderLogoWrapper>

        <Nav />

        <HeaderContacts>
          <HeaderList>
            <HeaderListText href="mailto:info@devstudio.com">
              <FiMail /> luckybroke@ukr.net
            </HeaderListText>
          </HeaderList>
          <HeaderList>
            <HeaderListText href="tel:+380679515231">
              <FiPhone />
              +38 067 951 52 31
            </HeaderListText>
          </HeaderList>
        </HeaderContacts>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
