import { FetchAPI } from './base-api';

export const HealthCheck = () => FetchAPI('health', 'GET')