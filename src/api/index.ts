import axios from 'axios'
import type { LoginCredentials } from '../views/LoginView'
import type { AccountView } from '@/types'
import { AccountFromViewMapper } from './mappers'

enum ApiAccountEndpoints {
  createAccount = '/accounts/create',
  signIn = '/accounts/sign_in',
}

class ApiClient {
  private client

  constructor() {
    this.client = axios.create({ baseURL: '/api', headers: { 'Content-Type': 'application/json' } })
  }

  async createAccount(accountView: AccountView) {
    await this.client.post(ApiAccountEndpoints.createAccount, AccountFromViewMapper(accountView))
  }

  async login(credentials: LoginCredentials) {
    await this.client.post(ApiAccountEndpoints.signIn, credentials)
  }
}

export default new ApiClient();