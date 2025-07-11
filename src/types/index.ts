// Basic types that ESLint can understand

// User interface (simplified)
export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isActive: boolean;
}

// API Response (simplified)
export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;  // Using 'any' for simplicity
  error?: string;
}

// User roles (simple enum)
export const UserRole = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator'
} as const;

// Login request
export interface LoginRequest {
  email: string;
  password: string;
}

// Register request  
export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// Export a simple type for the role
export type UserRoleType = typeof UserRole[keyof typeof UserRole];
