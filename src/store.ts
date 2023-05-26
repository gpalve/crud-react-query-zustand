import { create } from "zustand";
import Employee from "./entities/Employee";

interface EmployeeState {
  employees: Employee[] | null;
  selectedDept: string; // New state for selected department
  setEmployeeData: (employees: Employee[]) => void;
  setDept: (dept: string) => void;
}

const useEmployeeStore = create<EmployeeState>((set) => ({
  employees: null,
  selectedDept: "",
  setEmployeeData: (employees) =>
    set((state) => ({
      employees: state.employees
        ? [...state.employees, ...employees]
        : employees,
    })),
  setDept: (dept) =>
    set(() => ({
      selectedDept: dept, // Update the selected department
    })),
}));

export default useEmployeeStore;
