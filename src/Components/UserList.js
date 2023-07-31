import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://your-mocapi-url/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error retrieving users:', error);
      });
  }, []);

  // Render the user list
  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;