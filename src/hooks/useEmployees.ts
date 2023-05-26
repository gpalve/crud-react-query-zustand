import { useQuery, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/APIClient";
import Employee from "../entities/Employee";
import useEmployeeStore from "../store";

const apiClient = new APIClient<Employee>("employees");

const useEmployees = () => {
  const queryClient = useQueryClient();
  const setEmployees = useEmployeeStore((state) => state.setEmployeeData);

  return useQuery<Employee[], Error>({
    queryKey: ["employees"],
    queryFn: apiClient.getEmployeesData,
    staleTime: 10000, //ms // 100sec
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      queryClient.setQueryData<Employee[]>(["employees"], data);
      setEmployees(data);
    },
  });
};

export default useEmployees;
