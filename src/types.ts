export type Account = {
  email: string;
  hashed_password: string;
  first_name: string;
  last_name: string;
  gender: string;
  age: number;
}

export type AccountView = {
  email?: Account['email'];
  password?: Account['hashed_password'];
  firstName?: Account['first_name'];
  lastName?: Account['last_name'];
  gender?: Account['gender'];
  age?: Account['age'];
}
