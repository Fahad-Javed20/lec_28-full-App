import express from "express";
import cors from "cors";

const app = express();
const port = process.env.port || 3000;

type EmployeeType = {
  id: number;
  name: string;
  salary: number;
  address: {
    city: string;
    country: string;
  };
};

const employees: EmployeeType[] = [
  {
    id: 1,
    name: "Fahad",
    salary: 40000000,
    address: {
      city: "Lahore",
      country: "Pakistan",
    },
  },
  {
    id: 2,
    name: "Usama",
    salary: 7000000,
    address: {
      city: "Lahore",
      country: "Pakistan",
    },
  },
  {
    id: 3,
    name: "Shehroz",
    salary: 5000000,
    address: {
      city: "Lahore",
      country: "Pakistan",
    },
  },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/employees", (req, res) => {
  return res.status(201).json(employees);
});

app.get("/employees/:id", (req, res) => {
  const emp_id = Number(req.params.id);
  const employee = employees.find((emp) => emp.id === emp_id);
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  return res.json(employee);
});


app.delete("/employees/:id", (req, res) => {
  const emp_id = Number(req.params.id);
  const employee = employees.find((emp) => emp.id === emp_id);
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
   deleteEmployee(emp_id);
  return res.status(201).json({message:"Employed Successfully Delete"});
  
});

app.listen(port, () => {
  console.log(`port is running on ${port} ...`);
});


function deleteEmployee(excludeId: number): EmployeeType[] {
  return employees.filter((emp) => emp.id !== excludeId);
}

