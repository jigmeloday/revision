import HeaderComponent from '@/components/shared/header.component';
import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
  return(
    <>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
      
    </>
  )
}