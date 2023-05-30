import { useRef } from "react";
import useEmployeeStore from "../store";

const DataFilters = () => {
  const pfNo = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const contact = useRef<HTMLInputElement>(null);
  const selectedDept = useEmployeeStore((s) => s.employeeQuery.department);

  const pfSearch = useEmployeeStore((s) => s.setPfSearch);
  const nameSearch = useEmployeeStore((s) => s.setNameSearch);
  const contactSearch = useEmployeeStore((s) => s.setContact);
  const resetEmployees = useEmployeeStore((s) => s.resetEmployees);
  const setSelectedDept = useEmployeeStore((s) => s.setDepartment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pfNo.current) pfSearch(pfNo.current.value);
    if (nameRef.current) nameSearch(nameRef.current.value);
    if (contact.current) contactSearch(contact.current.value);
  };

  return (
    <div>
      <form>
        <div className="row my-1">
          <div className="col-md-2">
            <input
              type="text"
              ref={pfNo}
              className="form-control"
              placeholder="PF"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              ref={nameRef}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              ref={contact}
              className="form-control"
              placeholder="Contact"
            />
          </div>
          <div className="col-md-3">
            <select
              className="form-select"
              onChange={(event) => setSelectedDept(event.target.value)}
            >
              <option value={selectedDept ? selectedDept : ""}>
                {selectedDept ? selectedDept : "Dept"}
              </option>
              <option value="SnT">SnT</option>
              <option value="Optg">Optg</option>
              <option value="Engg">Engg</option>
            </select>
          </div>
          <div className="col-md-1 my-1">
            <button className="btn btn-sm btn-success" onClick={handleSubmit}>
              Search
            </button>
          </div>
          <div className="col-md-1 my-1">
            <button className="btn btn-sm btn-primary" onClick={resetEmployees}>
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DataFilters;
