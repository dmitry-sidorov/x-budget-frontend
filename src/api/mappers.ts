import type { Account, AccountView } from "@/types"

export const AccountFromViewMapper = ({ password, firstName, lastName, ...rest }: AccountView): Account => ({
  hashed_password: password,
  first_name: firstName,
  last_name: lastName,
  ...rest
})

export const AccountToViewMapper = ({ hashed_password, first_name, last_name, ...rest }: Account): AccountView => ({
  password: hashed_password,
  firstName: first_name,
  lastName: last_name,
  ...rest
})