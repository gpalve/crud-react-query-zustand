import axios from "axios";
import Employee from "../entities/Employee";

const axiosInstance = axios.create({
  baseURL: "https://iranalytics.in/coms/public/api/",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getEmployeesData = () =>
    axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);

  getEmployee = (id: string) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);

  saveEmployeeData = (employee: Employee) =>
    axiosInstance.post<T[]>(this.endpoint, employee).then((res) => res.data);

  editEmployeeData = (employee: Employee) =>
    axiosInstance
      .put<T[]>(this.endpoint + "/" + employee.id, employee)
      .then((res) => res.data);

  deleteEmployeeData = (id: string) =>
    axiosInstance.delete(this.endpoint + "/" + id).then((res) => res.data);
}

export default APIClient;
