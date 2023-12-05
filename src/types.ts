export type Account = {
  email: string;
  hashed_password: string;
  first_name: string;
  last_name: string;
  gender: string;
  birthdate: string;
}

export type Group = {
  name: string;
  description?: string;
}

// TODO: separate backend typing from view models 
export type AccountViewModel = {
  email?: Account['email'];
  password?: Account['hashed_password'];
  firstName?: Account['first_name'];
  lastName?: Account['last_name'];
  gender?: Account['gender'];
  birthdate?: Account['birthdate'];
}

export type Domain = {
  percentage: number
  title: string
}

export type Category = {
  domain: Domain
  title: string
}

export type Payment = {
  account: Account
  amount: number
  category: Category
  currency: string
  description: string
}
