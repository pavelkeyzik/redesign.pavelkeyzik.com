import Container from '../components/container/container';
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import LastWorks from '../components/last-works/last-works';
import Section from '../components/section/section';

export function Index() {
  return (
    <Container>
      <Header />
      <Hero />
      <Section
        config={{
          title: 'Last Works',
        }}
      >
        <LastWorks />
      </Section>
    </Container>
  );
}

export default Index;
