import React, { useEffect, useState } from 'react';
import { firestore } from './firebase';

const Results = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Fetch the betting results from the Firestore database
        const fetchResults = async () => {
            try {
                const resultsSnapshot = await firestore.collection('bettingResults').get();
                const resultsData = resultsSnapshot.docs.map((doc) => doc.data());
                setResults(resultsData);
            } catch (error) {
                console.log('Error fetching results:', error);
            }
        };

        fetchResults();
    }, []);

    const handleConfirm = async (resultId) => {
        // Update the confirmation status of a betting result in Firestore
        try {
            await firestore.collection('bettingResults').doc(resultId).update({
                confirmed: true,
            });
        } catch (error) {
            console.log('Error confirming result:', error);
        }
    };

    return (
        <div>
            <h2>Betting Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Player</th>
                        <th>Amount</th>
                        <th>Confirmed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => (
                        <tr key={result.id}>
                            <td>{result.date}</td>
                            <td>{result.player}</td>
                            <td>{result.amount}</td>
                            <td>{result.confirmed ? 'Yes' : 'No'}</td>
                            {!result.confirmed && (
                                <td>
                                    <button onClick={() => handleConfirm(result.id)}>Confirm</button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Results;
