import React, { useEffect, useState } from 'react';
import { firestore } from './firebase';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users' data from Firestore
        const fetchUsers = async () => {
            try {
                const usersSnapshot = await firestore.collection('users').get();
                const usersData = usersSnapshot.docs.map((doc) => doc.data());
                setUsers(usersData);
            } catch (error) {
                console.log('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Home</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Total Net Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.totalNetAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
