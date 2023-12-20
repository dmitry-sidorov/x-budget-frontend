import axios from 'axios'
import type { LoginCredentials } from '@/views/LoginView.vue'
import type { AccountViewModel } from '@/types'
import { AccountFromViewMapper } from './mappers'
import AuthTokenStorage from '@/auth-token-storage'

enum ApiAccountEndpoints {
  createAccount = '/accounts/create',
  signIn = '/accounts/sign_in',
}

enum ProtectedApiAccountEndpoints {
  getCurrentAccount = '/accounts/current',
  getGroups = '/groups',
}

class ApiClient {
  private client

  constructor() {
    this.client = axios.create({ baseURL: '/api', headers: { 'Content-Type': 'application/json' } })
  }

  private getHeaders() {
    const { auth_token } = AuthTokenStorage.getAuthToken() || { token: ' ' };

    return { headers: { Authorization: auth_token } }
  }

  createAccount(accountViewModel: AccountViewModel) {
    return this.client.post(ApiAccountEndpoints.createAccount, AccountFromViewMapper(accountViewModel))
  }

  login(credentials: LoginCredentials) {
    return this.client.post(ApiAccountEndpoints.signIn, AccountFromViewMapper(credentials as AccountViewModel))
  }

  getCurrentAccount() {
    return this.client.get(ProtectedApiAccountEndpoints.getCurrentAccount, this.getHeaders())
  }

  getGroups() {
    return this.client.get(ProtectedApiAccountEndpoints.getGroups, this.getHeaders())
  }
}

export default new ApiClient();