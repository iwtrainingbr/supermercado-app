const STORAGE_NAME = 'supermercado_user';

export function userLogged() {
  return localStorage.getItem(STORAGE_NAME);
}

export function makeLogin() {
  let user = {
    name: 'Zezim das Tapiocas',
  };

  localStorage.setItem(STORAGE_NAME, JSON.stringify(user));
}

export function makeLogout() {
  localStorage.removeItem(STORAGE_NAME);
}
