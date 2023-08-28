import axios from 'axios'
import type { LoginCredentials } from '../views/LoginView'

enum ApiEndpoints {
  login = 'login',
}

class ApiClient {
  private client

  constructor() {
    this.client = axios.create({ baseURL: '/api', headers: { 'Content-Type': 'application/json' } })
  }

  login(credentials: LoginCredentials) {
    this.client.post(ApiEndpoints.login, credentials)
  }
}

export default new ApiClient();