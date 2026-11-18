import PublicLayout from '@/layouts/public.layout';
import LandingPage from '@/pages/landing-page/landing-page';
import { Route, Routes } from 'react-router-dom';

export default function PublicRoute() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
}
