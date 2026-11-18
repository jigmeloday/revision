import { FetchAPI } from './base-api';

export const Login = (data: { email: string, password: string }) => {
  return FetchAPI('auth/login', 'POST', data)
}

export const SignUp = (data: { email: string, password: string }) => {
  return FetchAPI('auth/register', 'POST', data)
}