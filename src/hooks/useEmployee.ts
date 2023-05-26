import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/APIClient";
import Employee from "../entities/Employee";

const api = new APIClient<Employee>("employee");

const useEmployee = (id: string) => {
  return useQuery({
    queryKey: ["employee", id],
    queryFn: () => api.getEmployee(id),
  });
};

export default useEmployee;
