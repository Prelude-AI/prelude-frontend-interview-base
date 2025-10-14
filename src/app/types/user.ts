import { RoleName } from './role';

export type User = {
  id: number;
  name: string;
  role: RoleName;
  avatar: string;
};

