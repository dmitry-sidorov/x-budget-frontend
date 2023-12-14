import { ONE_HOUR_IN_MILLISECONDS } from "./constants"

export type AuthTokenData = {
  auth_token: `Bearer ${string}`;
  expiredAt: number;
}

class AuthTokenStorage {
  private storageKey = 'auth_token'

  isTokenValid(): boolean {
    if (!this.isTokenExist()) return false;

    const { expiredAt } = this.getAuthToken() || { expiredAt: Date.now() };

    return expiredAt > Date.now();
  }

  isTokenExist(): boolean {
    const tokenData = this.getAuthToken();

    return Boolean(tokenData);
  }

  getAuthToken(): AuthTokenData | null {
    const jsonData = localStorage.getItem(this.storageKey);

    return jsonData ? JSON.parse(jsonData) : null;
  }

  setAuthToken(token: string) {
    const tokenData: AuthTokenData = {
      auth_token: `Bearer ${token}`,
      expiredAt: Date.now() + ONE_HOUR_IN_MILLISECONDS
    }

    localStorage.setItem(this.storageKey, JSON.stringify(tokenData))
  }
}

export default new AuthTokenStorage()
