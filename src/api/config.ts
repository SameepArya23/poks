export interface ApiEndpoint {
  name: string;
  path: string;
  hasPathParams?: boolean;
}

export const apiConfig: ApiEndpoint[] = [
  // auth
  { name: "login", path: "/api/v1/users/login" },
  { name: "register", path: "/api/v1/users/register" },
  { name: "logout", path: "/api/v1/users/logout" },
  // products
  { name: "allProducts", path: "/api/v1/ecommerce/products" },
  { name: "productById", path: "/api/v1/ecommerce/products/{productId}" },
];
