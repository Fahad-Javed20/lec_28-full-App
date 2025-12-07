interface EmployeeFormProps {
  onAddEmployee: (employee: EmployeeType) => void;
}

import { useForm } from "react-hook-form";
import type { EmployeeType } from "../types/EmployeeType";


const EmployeeForm = ({ onAddEmployee }: EmployeeFormProps) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<EmployeeType>();
    const onSubmit = (data: EmployeeType) => {
        onAddEmployee(data);
        reset();
    }
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Add New Employee</h2>
        <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="border border-gray-400 p-2 w-full"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>  
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="salary">Salary:</label>
                <input
                    type="number"
                    id="salary"
                    {...register("salary", { required: "Salary is required" })}
                    className="border border-gray-400 p-2 w-full"
                />
                {errors.salary && <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>}
            </div>  
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    {...register("address.city", { required: "City is required" })}
                    className="border border-gray-400 p-2 w-full"
                />
                {errors.address?.city && <p className="text-red-500 text-sm mt-1">{errors.address.city.message}</p>}
            </div>  
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="country">Country:</label>
                <input
                    type="text"
                    id="country"
                    {...register("address.country", { required: "Country is required" })}
                    className="border border-gray-400 p-2 w-full"
                />
                {errors.address?.country && <p className="text-red-500 text-sm mt-1">{errors.address.country.message}</p>}
            </div>  
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add Employee
            </button>
        </form> 
    </div>
  )
}

export default EmployeeForm
