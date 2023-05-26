import { useState } from "react";
import { Form } from "react-bootstrap";
import useEmployeeStore from "../store";

const DepartmentFilter = () => {
  const [dept, setDept] = useState("");
  const setEmployeeDept = useEmployeeStore((state) => state.setDept);
  const employees = useEmployeeStore((s) => s.employees);
  console.log(employees);
  console.log(dept);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDept = event.target.value;
    setDept(selectedDept);
    setEmployeeDept(selectedDept);
  };

  return (
    <div>
      <div className="col-md-3">
        <Form.Select
          size="sm"
          className="my-1"
          onChange={(event) => handleSelectChange(event)}
          value={dept}
        >
          <option value="">Dept</option>
          <option value="SnT">SnT</option>
          <option value="Optg">Optg</option>
          <option value="Engg">Engg</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default DepartmentFilter;
