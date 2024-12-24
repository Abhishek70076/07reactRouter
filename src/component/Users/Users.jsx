import React from 'react';
import { useParams } from 'react-router-dom';

function Users() {
    // Extract `userid` from route parameters
    const { userid } = useParams();

    return (
        <div className='bg-purple-500 text-pink-200 text-3xl p-4'>
            <h1>User ID: {userid}</h1>
        </div>
    );
}

export default Users;
