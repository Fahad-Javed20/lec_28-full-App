import { useEffect, useState } from "react";
import type { EmployeeType } from "../types/EmployeeType";
import EmployeeListComponent from "./EmployeeListComponent";
import EmployeeForm from "./EmployeeForm";

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch("http://localhost:3000/employees");
      const data = await response.json();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <EmployeeForm />
      <EmployeeListComponent employees={employees} />
    </div>
  );
};
export default EmployeeDashboard;
