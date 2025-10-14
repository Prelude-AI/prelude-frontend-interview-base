export const ROLES = {
  ADMIN: 'admin',
  ADVISOR: 'advisor',
  ASSISTANT: 'assistant',
} as const;

export type RoleName = typeof ROLES[keyof typeof ROLES];

export type Role = {
  id: number;
  roleName: RoleName;
  avatar: string;
};

