export interface ApiEndpoint {
  name: string;
  path: string;
  hasPathParams?: boolean;
}

export const apiConfig: ApiEndpoint[] = [
  { name: "sign-in", path: "/user/login" },
  { name: "sign-up", path: "/user/register" },
];
