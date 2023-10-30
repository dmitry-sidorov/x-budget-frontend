import axios from 'axios'
import type { LoginCredentials } from '../views/LoginView'
import type { AccountViewModel } from '@/types'
import { AccountFromViewMapper } from './mappers'
import TokenStorage from '@/token-storage'

enum ApiAccountEndpoints {
  createAccount = '/accounts/create',
  signIn = '/accounts/sign_in',
}

enum ProtectedApiAccountEndpoints {
  getCurrentAccount = '/accounts/current',
  getPayments = '/payments',
}

class ApiClient {
  private client

  constructor() {
    this.client = axios.create({ baseURL: '/api', headers: { 'Content-Type': 'application/json' } })
  }

  private getHeaders() {
    return { headers: { Authorization: TokenStorage.getAuthToken() } }
  }

  createAccount(accountViewModel: AccountViewModel) {
    return this.client.post(ApiAccountEndpoints.createAccount, AccountFromViewMapper(accountViewModel))
  }

  login(credentials: LoginCredentials) {
    return this.client.post(ApiAccountEndpoints.signIn, AccountFromViewMapper(credentials))
  }

  getCurrentAccount() {
    return this.client.get(ProtectedApiAccountEndpoints.getCurrentAccount, this.getHeaders())
  }

  getPayments() {
    return this.client.get(ProtectedApiAccountEndpoints.getPayments, this.getHeaders())
  }
}

export default new ApiClient();