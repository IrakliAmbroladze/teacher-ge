import { Department } from "@/types/department";

export interface Employee {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  department: Department;
}

export interface EmployeeFormData {
  name: string;
  surname: string;
  avatar: File | null;
  department_id: number;
}
