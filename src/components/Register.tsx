import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const registerUser = useMutation({
    mutationFn: (data: RegisterUser) =>
      axios.post("https://iranalytics.in/coms/public/api/register", data),
    onSuccess: (data) => {
      console.log(data);
      navigate("/");
    },
    onError: (error: any) => {
      console.error("An error occurred while logging in:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;

    const userData: RegisterUser = {
      name,
      email,
      password,
    };

    registerUser.mutate(userData);
  };

  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <Card.Title className="text-center mb-4">COMS Registration</Card.Title>
        <hr />

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          {registerUser.isError && <div>Error occurred while registering.</div>}

          <div className="text-center mt-3">
            <Button
              variant="primary"
              type="submit"
              disabled={registerUser.isLoading}
            >
              {registerUser.isLoading ? "Registering..." : "Register"}
            </Button>
          </div>
        </Form>
        <div className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Register;
