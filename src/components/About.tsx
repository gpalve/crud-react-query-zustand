import { Card, Col, Container, Row } from "react-bootstrap";


const About = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/45437458?v=4"
            />
            <Card.Body>
              <Card.Title>Ganesh Palve</Card.Title>
              <Card.Text>
                Let's connect on Twitter:&nbsp;
                <a href="https://twitter.com/gpalve9">@gpalve9</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                <h4>Hello, I'm Ganesh Palve!</h4>
                <p>
                  I'm a curious individual passionate about coding,
                  entrepreneurship, teaching, blog writing, automation, and
                  teamwork. I believe in the power of technology to drive
                  positive change and create innovative solutions.
                </p>
                <p>
                  With a strong interest in machine learning and Python, I'm
                  currently working on MLOps and RailGPT projects. Additionally,
                  I have experience with React and TypeScript, which I
                  thoroughly enjoy.
                </p>
                <p>
                  I'm currently involved in an exciting project called RailPost
                  Gatishakti Express, which is focused on enhancing the
                  technical support for Indian Railways. My contribution lies in
                  building machine learning models that provide in-depth
                  analysis and support to railway professionals. By leveraging
                  data and advanced analytics, we aim to optimize operations and
                  improve efficiency within the railway sector.
                </p>
                <p>
                  In addition to my technical work, I actively contribute to
                  open source projects, and you can find all of my projects on
                  my GitHub profile. I'm a firm believer in the power of
                  collaboration and sharing knowledge, and I embrace the open
                  source community.
                </p>
                <p>
                  Through my blog, located at
                  <a href="https://sigblog.mpes.co.in">
                    https://sigblog.mpes.co.in
                  </a>
                  , I regularly share insights, tutorials, and articles on
                  various topics related to Laravel, PHP, Python, SocketIO,
                  Android Apps, and Flutter.
                </p>
                <p>
                  If you have any questions or need assistance with any of the
                  technologies I specialize in, feel free to reach out to me.
                  You can contact me at gpalve@gmail.com. I'm always eager to
                  engage in meaningful discussions and help fellow developers.
                </p>
                <p>
                  Fun fact about me: I consider myself a "Jack of All Trades,"
                  but I'm currently focusing on mastering Python with ML
                  techniques.
                </p>
                <p>
                  Let's connect! You can find me on Twitter
                  <a href="https://twitter.com/gpalve9">@gpalve9</a>, where I
                  share insights, updates, and interesting findings related to
                  the tech world. I'm excited to connect with like-minded
                  individuals, collaborate on projects, and continue learning
                  and growing together. Feel free to reach out, and let's
                  explore the fascinating world of technology together!
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
