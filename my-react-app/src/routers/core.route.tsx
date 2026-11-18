import { Route, Routes } from 'react-router-dom';
import PublicRoute from './public.route';
import LoginPage from '@/pages/authentication/login';
import UserListingPage from '@/pages/user-listing-page/user-listing-page';
import ProtectedRoute from './protected.route';

export default function CoreRoute() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/user-listing" element={<UserListingPage />} />
      </Route>
    </Routes>
  );
}
