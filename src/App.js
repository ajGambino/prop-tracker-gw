import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from './firebase';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NotFound from './NotFound';
import './App.css';

function App() {
  const [user] = useAuthState(auth);
  const betsRef = firestore.collection('bets');
  const [bets] = useCollectionData(betsRef, { idField: 'id' });

  const handleConfirmBet = async (betId) => {
    // Update the confirmed field of the bet document to true
    await betsRef.doc(betId).update({ confirmed: true });
  };

  return (
    <div>
      <h1>Golf Tracker</h1>
      {user ? (
        <>
          <p>Welcome, {user.email}!</p>
          <Routes>
            <Route
              path="/"
              element={<Home bets={bets} handleConfirmBet={handleConfirmBet} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
