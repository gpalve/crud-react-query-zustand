import useEmployees from "../hooks/useEmployees";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/APIClient";
import Employee from "../entities/Employee";
import EditEmployee from "./EditEmployee";
import { Link } from "react-router-dom";


import FullPageLoader from "./FullPageLoader";
import DataFilters from "./DataFilters";

const ListEmployee = () => {
  const { data: employees, isLoading } = useEmployees(); // Rename 'data' to 'employees'

  const queryClient = useQueryClient();

  const deleteUser = useMutation<Employee, Error, any>({
    mutationFn: (id: string) =>
      new APIClient("employees").deleteEmployeeData(id),
    onSuccess: () => queryClient.invalidateQueries(["employees"]),
  });

  const handleDelete = (id: number) => {
    deleteUser.mutate(id.toString());
  };

  return (
    <div>
      <DataFilters />
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <div className="table-responsive">
          <table
            className="table table-striped rounded shadow-sm"
            style={{ width: "100%" }}
          >
            <thead style={{ background: "skyblue" }}>
              <tr>
                {/* Wrap table headers with 'tr' tags */}
                <th>ID</th>
                <th>PF</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Dept</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees?.map(
                (
                  employee // Use 'employees' instead of 'data'
                ) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.Pf_no}</td>
                    <td>
                      <Link to={`employee/${employee.id}`}>
                        {employee.Name}
                      </Link>
                    </td>
                    <td>{employee.Contact}</td>
                    <td>{employee.Dept}</td>
                    <td>
                      <EditEmployee employee={employee} />
                      &nbsp;
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(employee.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
      {deleteUser.error?.message}
      {deleteUser.isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-danger" role="status"></div>
        </div>
      )}
    </div>
  );
};

export default ListEmployee;
