import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import useEmployeeStore from "../store";
import HomePage from "../pages/HomePage";

interface LoginType {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const hasToken = useEmployeeStore((s) => s.hasToken);
  const loginEmployee = useMutation({
    mutationFn: (data: LoginType) =>
      axios.post("https://iranalytics.in/coms/public/api/login", data),
    onSuccess: (data) => {
      console.log("login success");
      // Save the token to local storage
      localStorage.setItem("token", data.data.token);
      // Navigate to the home page
      navigate("/");
    },
    onError: (error: any) => {
      console.error("An error occurred while logging in:", error);
    },
  });

  if (hasToken()) return <HomePage />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    const data: LoginType = { email, password };
    loginEmployee.mutate(data);
  };

  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <Card.Title className="text-center mb-4">COMS</Card.Title> <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          {loginEmployee.isError && (
            <div className="text-danger">Error occurred while logging in.</div>
          )}

          <div className="text-center mt-3">
            <Button
              variant="primary"
              type="submit"
              disabled={loginEmployee.isLoading}
            >
              {loginEmployee.isLoading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </Form>
        <div className="text-center mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Login;
