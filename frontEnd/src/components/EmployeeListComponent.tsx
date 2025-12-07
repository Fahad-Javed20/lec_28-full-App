import type { EmployeeType } from "../types/EmployeeType"

interface EmployeeListComponentProps {
    employees: EmployeeType[]
}

const EmployeeListComponent = ({ employees }: EmployeeListComponentProps) => {
  return (
    <div>
        <h2>Employee List</h2>
        {employees.map((emp) => (
          <div key={emp.id}>
            <p>Name: {emp.name}</p>
            <p>Salary: {emp.salary}</p>
            <p>City: {emp.address.city}</p>
            <p>Country: {emp.address.country}</p>
          </div>
        ))}
    </div>
  )
}

export default EmployeeListComponent
