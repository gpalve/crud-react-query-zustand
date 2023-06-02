import { create } from "zustand";

interface EmployeeQuery {
  department?: string;
  name?: string;
  pf?: string;
  contact?: string;
}

interface EmployeeQueryStore {
  employeeQuery: EmployeeQuery;
  setDepartment: (department: string) => void;
  setNameSearch: (name: string) => void;
  setPfSearch: (pf: string) => void;
  setContact: (contact: string) => void;
  resetEmployees: () => void;
  hasToken: () => boolean;
  resetToken: () => void;
}

const useEmployeeStore = create<EmployeeQueryStore>((set) => ({
  employeeQuery: {},
  setDepartment: (department) =>
    set((store) => ({ employeeQuery: { ...store.employeeQuery, department } })),
  setNameSearch: (name) =>
    set((store) => ({ employeeQuery: { ...store.employeeQuery, name } })),
  setPfSearch: (pf) =>
    set((store) => ({ employeeQuery: { ...store.employeeQuery, pf } })),
  setContact: (contact) =>
    set((store) => ({ employeeQuery: { ...store.employeeQuery, contact } })),
  resetEmployees: () => set(() => ({ employeeQuery: {} })),
  hasToken: () => {
    const token = localStorage.getItem("token");
    return !!token;
  },
  resetToken: () => {
    localStorage.removeItem("token");
  },
}));

export default useEmployeeStore;
