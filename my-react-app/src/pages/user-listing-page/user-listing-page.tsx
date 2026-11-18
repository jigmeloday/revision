import { getUsers } from '@/api/user-api';
import { useEffect } from 'react';

export default function UserListingPage() {
  useEffect(() => {
    const getUser = async() => {
      const users = await getUsers(1);
      console.log(users)
    }
    getUser();
  },[])
  return(
    <div>
      hello
    </div>
  )
}