import { useRef, useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import Employee from "../entities/Employee";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/APIClient";

interface Props {
  employee: Employee;
}

const EditEmployee = ({ employee }: Props) => {
  const queryClient = useQueryClient();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const pfNo = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const contact = useRef<HTMLInputElement>(null);
  const dept = useRef<HTMLInputElement>(null);

  const editEmployee = useMutation({
    mutationFn: (employee: Employee) =>
      new APIClient<Employee>("employees").editEmployeeData(employee),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
      setShow(false);
    },
  });

  const handleSave = () => {
    const editedEmployee = {
      id: employee.id,
      Pf_no: pfNo.current?.value || "",
      Name: name.current?.value || "",
      Contact: contact.current?.value || "",
      Dept: dept.current?.value || "",
    };

    editEmployee.mutate(editedEmployee);
  };

  return (
    <>
      <Button variant="outline-success" size="sm" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Body>
            <Form.Control
              type="text"
              ref={pfNo}
              defaultValue={employee.Pf_no}
            />
            <br />
            <Form.Control type="text" ref={name} defaultValue={employee.Name} />
            <br />
            <Form.Control
              type="text"
              ref={contact}
              defaultValue={employee.Contact}
            />
            <br />
            <Form.Control type="text" ref={dept} defaultValue={employee.Dept} />
            <br />
            {editEmployee.isLoading ? <Spinner /> : ""}
          </Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditEmployee;
