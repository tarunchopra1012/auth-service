export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRoleType;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// User roles as const assertion (better than enum for this case)
export const UserRole = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator'
} as const;

// Type derived from the const object
export type UserRoleType = typeof UserRole[keyof typeof UserRole];

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: UserRoleType;
}

export interface JwtPayload {
  userId: number;
  email: string;
  role: UserRoleType;
}

// Default user role for convenience
export const DEFAULT_USER_ROLE = UserRole.USER;
