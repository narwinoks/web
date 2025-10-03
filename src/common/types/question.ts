// types.ts
export interface TypePropsQuestion {
  id: number;
  email: string;
  name: string;
  question: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  is_verify_admin: boolean;
}
