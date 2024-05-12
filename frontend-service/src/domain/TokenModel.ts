interface Roles {
  roles: string[];
}

export interface TokenModel {
  email: string;
  name: string;
  realm_access: Roles;
  sid: string
}
