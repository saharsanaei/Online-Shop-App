import React, { useEffect, useState } from 'react';
import { fetchUser } from '../api';
import { FaUserAlt } from 'react-icons/fa';

interface User {
  id: number;
  name: {
    firstname: string;
    // lastname: string;
  };
  // email: string;
}

const UserDetails = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUser().then((response) => setUser(response.data));
  }, []);

  if (!user) return <div>Loading user details...</div>;

  return (
    <div className="border p-4 rounded-lg bg-gray-200 mb-4 flex items-center">
      <FaUserAlt className="text-gray-500 mr-4" size={24} />
      <div>
        {/* <h2 className="text-xl font-bold">User Details</h2> */}
        <p className="text-gray-700">Hi, {user.name.firstname}</p>
        {/* <p className="text-gray-700">Email: {user.email}</p> */}
      </div>
    </div>
  );
};

export default UserDetails;