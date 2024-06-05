import React from 'react'
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
        id: 'u1',
        name: 'krishna',
        image: 'https://images.unsplash.com/photo-1712847332449-3791c8810949?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
        places: 3,
    },
    {
        id: 'u2',
        name: 'aparna',
        image: 'https://plus.unsplash.com/premium_photo-1714051661301-860c930a2c85?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
        places: 1,
    },
    {
        id: 'u3',
        name: 'uday',
        image: 'https://images.unsplash.com/photo-1717445956950-f12e558810a8?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
        places: 5,
    },
    
  ];
  return (
    <div>
        <UsersList items={USERS}/>
    </div>
  )
}

export default Users;