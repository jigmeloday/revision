import { FetchAPI } from './base-api';

export const getUsers = (page?: number) => {
  return FetchAPI(`users?page=${page}&limit=10`, 'GET')
}