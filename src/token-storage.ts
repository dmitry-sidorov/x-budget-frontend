class TokenStorage {
  private storageKey = 'auth_token'

  getAuthToken() {
    return localStorage.getItem(this.storageKey)
  }

  setAuthToken(token: string) {
    localStorage.setItem(this.storageKey, `Bearer ${token}`)
  }
}

export default new TokenStorage()
