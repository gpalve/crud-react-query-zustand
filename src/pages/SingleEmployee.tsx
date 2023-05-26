// SingleEmployee.tsx
import { useParams } from "react-router-dom";
import useEmployee from "../hooks/useEmployee";
import { Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import LikeComment from "../components/LikeComment";

const SingleEmployee = () => {
  const { id } = useParams();
  const { data: employee, isLoading } = useEmployee(id!);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          <Row>
            <Col md={4}>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/corporate-user-icon.png"
                />
                <Card.Body>
                  <Card.Title>{employee?.Name}</Card.Title>
                  <Card.Text>
                    ID: {employee?.id}
                    <br />
                    Pf_no: {employee?.Pf_no}
                    <br />
                    Contact: {employee?.Contact}
                    <br />
                    Department: {employee?.Dept}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Any Description</ListGroup.Item>
                </ListGroup>
                <LikeComment employeeId={employee?.id!} />
              </Card>
            </Col>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <h4>Hello, I'm {employee?.Name}!</h4>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur nulla unde eum fugiat laudantium eveniet
                      fugit accusantium iste quibusdam! Beatae, explicabo quo
                      corrupti nobis non illo deleniti nemo quibusdam enim!
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SingleEmployee;
