import { ReactNode } from "react";
import Login from "./Login";
interface Props {
  isAuthenticated: boolean;
  children: ReactNode;
}

const Protected = ({ isAuthenticated, children }: Props) => {
  if (!isAuthenticated) {
    return <Login />;
  }
  return <>{children}</>;
};

export default Protected;
