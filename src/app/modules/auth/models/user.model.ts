export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  is_email_verified: boolean;
  last_login: number;
  token?: string;
}
