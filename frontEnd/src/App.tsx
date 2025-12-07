
import { useEffect, useState } from 'react'
import './App.css'
import EmployeeListComponent from './components/EmployeeListComponent'
import type { EmployeeType } from './types/EmployeeType'

function App() {
  
  const [employees, setEmployees] = useState<EmployeeType[]>([])


  useEffect(()=>{
 const fetchEmployees = async () => {
    const response = await fetch('http://localhost:3000/employees')
    const data = await response.json()
    setEmployees(data)
  }
  fetchEmployees()
  },[])
 

  return (
    <>
      <EmployeeListComponent employee = {employees} />
    </>
  )
}

export default App
