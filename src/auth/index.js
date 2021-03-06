export function isAuthenticated() {
  if (typeof window === undefined) {
    return false;
  }
  const user = localStorage.getItem('user');
  return user !== null;
}

export function signOut(next) {
  localStorage.removeItem('user');
  next();
}