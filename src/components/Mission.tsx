import { Alert } from "react-bootstrap";

const Mission = () => {
  return (
    <Alert variant="success">
      <Alert.Heading as="h6">🚀 Open Source</Alert.Heading>
      <p>
        Open source software promotes collaboration and transparency by allowing
        anyone to view, modify, and distribute the source code. It fosters
        innovation and empowers individuals and communities to contribute to
        technological advancements. <hr />
      </p>

      <Alert.Heading as="h6">🚀 Use for Everybody</Alert.Heading>
      <p>
        Technology should be accessible to everyone. By embracing inclusivity
        and designing user-friendly interfaces, we can ensure that people of all
        backgrounds and abilities can benefit from and contribute to the digital
        world. <hr />
      </p>

      <Alert.Heading as="h6">🚀 Universal Education</Alert.Heading>
      <p>
        Education is a fundamental right that should be available to every
        person on the planet. By leveraging technology and promoting open
        educational resources, we can break down barriers and provide equitable
        access to knowledge and learning opportunities.
      </p> <hr />

      <Alert.Heading as="h6">🚀 Equal Rights for All</Alert.Heading>
      <p>
        Every individual deserves equal rights and opportunities, regardless of
        their race, gender, ethnicity, or any other characteristic. Embracing
        diversity, fostering inclusion, and advocating for social justice are
        crucial steps towards creating a fair and just society.
      </p> 
    </Alert>
  );
};

export default Mission;
