import { useEffect, useState } from 'react';
import axios from 'axios';

const ViewTrips = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        axios.get('/api/trips')
            .then((response) => {
                setTrips(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>View Trips</h1>
            {trips.map((trip) => (
                <div key={trip._id}>
                    <h2>{trip.title}</h2>
                    <p>{trip.location}</p>
                    <p>{trip.startDate} - {trip.endDate}</p>
                </div>
            ))}
        </div>
    );
};

export default ViewTrips;
