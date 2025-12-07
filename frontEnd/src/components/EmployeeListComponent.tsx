import type { EmployeeType } from "../types/EmployeeType";

interface EmployeeListComponentProps {
  employees: EmployeeType[];
}

const EmployeeListComponent = ({ employees }: EmployeeListComponentProps) => {
  return (
    <div>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-1">Name</th>
            <th className="border border-gray-400 px-4 py-1">Salary</th>
            <th className="border border-gray-400 px-4 py-1">City</th>
            <th className="border border-gray-400 px-4 py-1">Country</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td className="border border-gray-400 px-4 py-1">{emp.name}</td>
              <td className="border border-gray-400 px-4 py-1">{emp.salary}</td>
              <td className="border border-gray-400 px-4 py-1">
                {emp.address.city}
              </td>
              <td className="border border-gray-400 px-4 py-1">
                {emp.address.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeListComponent;
