import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from './firebase';
import Login from './Login';

function App() {
  const [user] = useAuthState(auth);
  const betsRef = firestore.collection('bets');
  const [bets] = useCollectionData(betsRef, { idField: 'id' });

  const handleConfirmBet = async (betId) => {
    // Update the confirmed field of the bet document to true
    await betsRef.doc(betId).update({ confirmed: true });
  };

  if (!user) {
    return <Login />;
  }

  return (
    <div>
      <h1>Golf Tracker</h1>
      <p>Welcome, {user.email}!</p>
      <ul>
        {bets &&
          bets.map((bet) => (
            <li key={bet.id}>
              {bet.player}: ${bet.amount} ({bet.confirmed ? 'Confirmed' : 'Pending'})
              {!bet.confirmed && (
                <button onClick={() => handleConfirmBet(bet.id)}>Confirm</button>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
