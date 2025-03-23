export interface Task {
  id: string;
  created_at?: string;
  name: string;
  description: string | null;
  due_date: string;
  employee_id: string;
}
export interface Task_Form {
  name: string;
  description: string;
  due_date?: string;
  status_id?: number;
  employee_id?: number;
  priority_id?: number;
}
