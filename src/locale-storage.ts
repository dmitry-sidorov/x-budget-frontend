class LocaleStorage {
  private storageKey = 'current_locale'

  getLocale() {
    return localStorage.getItem(this.storageKey)
  }

  setLocale(locale: string) {
    localStorage.setItem(this.storageKey, locale)
  }
}

export default new LocaleStorage()
