const PC = globalThis.PasswordCredential

export const storeCred = async (creds: {
  id: string
  password: string
}): Promise<Credential | null> => {
  // check if PasswordCredential is supported by this browser.
  if (PC) {
    const cred = new PC(creds)
    return navigator.credentials.store(cred)
  } else {
    return null
  }
}