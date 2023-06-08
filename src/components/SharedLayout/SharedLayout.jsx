import { Suspense, Fragment } from 'react';
import { Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
// import Loader from '../../shared/components/Loader/Loader';
// import Container from 'components/Container/Container';

const SharedLayout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        {/* <Suspense fallback={<Container><Loader /></Container>}> */}
        <Suspense>
          <Routes>{children}</Routes>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default SharedLayout;
