import { useState } from 'react';
import axios from 'axios';

const AddTrip = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [activities, setActivities] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTrip = {
            title,
            location,
            startDate,
            endDate,
            activities: activities.split(',').map((item) => item.trim()),
        };

        axios.post('/api/trips', newTrip)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <textarea placeholder="Activities (comma separated)" value={activities} onChange={(e) => setActivities(e.target.value)}></textarea>
            <button type="submit">Add Trip</button>
        </form>
    );
};

export default AddTrip;
