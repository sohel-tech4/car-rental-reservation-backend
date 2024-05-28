export type TUser = {
  id: string;
  password: string;
  needsPasswordChane: boolean;
  role: 'admin' | 'student' | 'faculty';
  staus: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
