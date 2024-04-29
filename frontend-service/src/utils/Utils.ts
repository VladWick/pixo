const server = "localhost:8181"
const realm = "pixo"
const springBootClient = "pixo-client";

export function login() {
  const callbackUrl = `${window.location.origin}`;
  window.location.href = `http://${server}/realms/${realm}/protocol/openid-connect/auth?redirect_uri=${encodeURIComponent(callbackUrl)}&response_type=token&client_id=${springBootClient}&scope=openid`;
}

export function logout() {
  const callbackUrl = `${window.location.origin}`;
  window.location.href = `http://${server}/realms/${realm}/protocol/openid-connect/logout?post_logout_redirect_uri=${encodeURIComponent(callbackUrl)}&response_type=token&client_id=${springBootClient}&scope=openid`;
}

export function register()  {
  const callbackUrl = `${window.location.origin}`;
  window.location.href = `http://${server}/realms/${realm}/protocol/openid-connect/registrations?redirect_uri=${encodeURIComponent(callbackUrl)}&response_type=token&client_id=${springBootClient}&scope=openid`;
}
