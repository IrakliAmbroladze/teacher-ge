export interface Task {
  id?: string;
  created_at?: string;
  name: string;
  description: string | null;
  due_date?: string;
  employee_id?: string;
  priority_id: number;
  status_id?: number;
}
