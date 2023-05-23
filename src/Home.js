import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from './firebase';

const Home = ({ bets, handleConfirmBet }) => {
    const [user] = useAuthState(auth);
    // Check if the user object exists and has the email property
    const userEmail = user?.email || '';

    return (
        <div>
            <h2>Home</h2>
            <p>Welcome, {userEmail}!</p>
            {/* Rest of the component code */}
        </div>
    );
};

export default Home;
