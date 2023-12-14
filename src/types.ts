import type { Account } from './api/types'

export type Group = {
  name: string;
  description?: string;
}

export type AccountViewModel = {
  email: Account['email'];
  password: Account['hashed_password'];
  firstName: Account['first_name'];
  lastName: Account['last_name'];
  gender: Account['gender'];
  birthdate: Account['birthdate'];
}

export type Category = {
  title: string
}
