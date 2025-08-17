export interface CalendarTask {
  id?: string;
  user_id?: string;
  date_key: string;
  task_text: string;
  checked: boolean;
  created_at?: string;
}
