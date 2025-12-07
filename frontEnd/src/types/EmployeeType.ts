export type EmployeeType = {
  id: number;
  name: string;
  salary: number;
  address: {
    city: string;
    country: string;
  };
};