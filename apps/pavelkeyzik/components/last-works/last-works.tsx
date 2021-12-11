import { Card } from '@pavelkeyzik/design-system';
import styles from './last-works.module.scss';

export function LastWorks() {
  return (
    <div className={styles.container}>
      <Card>
        <Card.Title>Pizzabot</Card.Title>
        <Card.Content>
          Pizzabot is a tool that returns a list of instructions for getting
          Pizzabot to the locations and delivering.
        </Card.Content>
      </Card>
      <Card>
        <Card.Title>Aibolit</Card.Title>
        <Card.Content>
          A Platform to help surgeons work with Computed Tomography data using
          3D Model Viewer
        </Card.Content>
      </Card>
      <Card>
        <Card.Title>Subaru Team Belarus</Card.Title>
        <Card.Content>
          The project was made to share news about automotive community of
          SUBARU owners in Belarus
        </Card.Content>
      </Card>
    </div>
  );
}

export default LastWorks;
