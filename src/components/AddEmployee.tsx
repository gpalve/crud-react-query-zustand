import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import APIClient from "../services/APIClient";
import Employee from "../entities/Employee";
import { Alert } from "react-bootstrap";
import FullPageLoader from "./FullPageLoader";

const AddEmployee = () => {
  const queryClient = useQueryClient();

  const pfNo = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const contact = useRef<HTMLInputElement>(null);
  const dept = useRef<HTMLSelectElement>(null);

  const [error, setError] = useState<string | null>(null);

  const addEmployee = useMutation({
    mutationFn: (employee: Employee) =>
      new APIClient<Employee>("employees").saveEmployeeData(employee),
    onSuccess: () => {
      queryClient.invalidateQueries(["employees"]);
      setError(null);
    },

    onError: (error: any) => {
      setError("Error adding employee. Please try again.");
      console.error("An error occurred while adding an employee:", error);
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const employee: Employee = {
      id: 0,
      Pf_no: pfNo.current?.value || "",
      Name: nameRef.current?.value || "",
      Contact: contact.current?.value || "",
      Dept: dept.current?.value || "",
    };
    addEmployee.mutate(employee);
    resetFormFields();
  };

  const resetFormFields = () => {
    if (pfNo.current && nameRef.current && contact.current && dept.current) {
      pfNo.current.value = "";
      nameRef.current.value = "";
      contact.current.value = "";
      dept.current.value = "";
    }
  };

  return (
    <div>
      <form className="p-2 rounded shadow-lg bg-light" onSubmit={handleSubmit}>
        <h4>Add Employee</h4>
        <hr />
        <div className="col-md-12">
          <input
            ref={pfNo}
            type="text"
            className="form-control"
            placeholder="Enter PF no"
          />
        </div>
        <br />
        <div className="col-md-12">
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <br />
        <div className="col-md-12">
          <input
            ref={contact}
            type="number"
            className="form-control"
            placeholder="Enter contact"
          />
        </div>
        <br />
        <div className="col-md-12">
          <select
            ref={dept}
            className="form-control"
            placeholder="Enter Dept"
            required
          >
            <option value="">Select Department</option>
            <option value="SnT">SnT</option>
            <option value="Optg">Optg</option>
            <option value="Engg">Engg</option>
            <option value="Electrical">Electrical</option>
          </select>
        </div>
        <br />
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary btn-block">
            {addEmployee.isLoading ? "Adding..." : "Add Employee"}
          </button>
          {error && (
            <Alert variant="danger" className="my-2">
              {error}
            </Alert>
          )}
          {addEmployee.isLoading && <FullPageLoader />}
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
