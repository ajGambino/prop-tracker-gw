import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the Golf Betting App!</p>
            <p>Click the button below to view the results.</p>
            <Link to="/results">View Results</Link>
        </div>
    );
};

export default Home;
