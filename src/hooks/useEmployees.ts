import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/APIClient";
import Employee from "../entities/Employee";
import useEmployeeStore from "../store";

const apiClient = new APIClient<Employee>("employees");

const useEmployees = () => {
  const employeeQuery = useEmployeeStore((s) => s.employeeQuery);

  return useQuery<Employee[], Error>({
    queryKey: ["employees", employeeQuery],
    queryFn: () =>
      apiClient.getEmployeesData({
        params: {
          Pf_no: employeeQuery.pf,
          Name: employeeQuery.name,
          Contact: employeeQuery.contact,
          Dept: employeeQuery.department,
        },
      }),
    staleTime: 10000, //ms // 100sec
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useEmployees;
