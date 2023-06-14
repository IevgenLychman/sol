import { ServicesList, ServicesItems } from './MainStyled';

const ServicesList = () => {
  const elements = items.map(({ id, to, text }) => (
    <ServicesList key={id}>
      <ServicesItems>
        <h3></h3>
        <p></p>
      </ServicesItems>
    </ServicesList>
  ));
  return <ServicesEl>{elements}</ServicesEl>;
};

export default ServicesList;
