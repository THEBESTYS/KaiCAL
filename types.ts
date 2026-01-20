
export interface User {
  id: string;
  username: string;
  password?: string;
  role: 'user' | 'admin';
}

export interface Notice {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

export type View = 'HOME' | 'ABOUT' | 'KAICA-L' | 'NOTICE' | 'LOGIN' | 'SIGNUP' | 'ADMIN';
