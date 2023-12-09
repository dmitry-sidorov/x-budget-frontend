export type Account = {
  email: string;
  hashed_password: string;
  first_name: string;
  last_name: string;
  gender: string;
  birthdate: string;
}

export type Group = {
  id: number;
  name: string;
  description?: string;
}

export type Bundle = {
  id: number;
  title: string;
  description?: string;
  percentage: number;
  group_id: number;
};

export type Category = {
  id: number;
  title: string;
  bundle_id: number;
  group_id: number;
};

export type Income = {
  id: number;
  description?: string;
  income_date: Date;
  group_id: number;
};

export type Invoice = {
  id: number;
  description?: string;
  amount: number;
  invoice_date: Date;
  category_id: number;
}