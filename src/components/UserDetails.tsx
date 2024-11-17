import React, { useEffect, useState } from 'react';
import { fetchUser } from '../Api';

const UserDetails = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetchUser().then((response) => setUser(response.data));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="border p-4">
      <h2>User Details</h2>
      <p>Name: {user.name.firstname} {user.name.lastname}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;