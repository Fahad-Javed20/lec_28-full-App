import type { EmployeeType } from "../types/EmployeeType"

interface EmployeeListComponentProps {
    employee: EmployeeType[]
}

const EmployeeListComponent = ({ employee }: EmployeeListComponentProps) => {
  return (
    <div>
        <h2>Employee List</h2>
        {employee.map((emp) => (
          <div key={emp.id}>
            <p>Name: {emp.name}</p>
            <p>Salary: {emp.salary}</p>
            <p>City: {emp.address.city}</p>
            <p>Country: {emp.address.country}</p>
            <hr />
          </div>
        ))}
    </div>
  )
}

export default EmployeeListComponent
