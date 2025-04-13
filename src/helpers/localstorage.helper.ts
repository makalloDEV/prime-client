export function getTokenFromLocalStorage(): string {
  const data = localStorage.getItem("token");

  if (data === null) {
    return "";
  }

  try {
    return JSON.parse(data);
  } catch {
    return "";
  }
}

export function setTokenToLocalStorage(key: string, token: string): void {
  localStorage.setItem(key, JSON.stringify(token));
}

export function removeTokenFromLocalStorage(key: string): void {
  localStorage.removeItem(key);
}
