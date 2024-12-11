import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage'; 
import AddTrip from './components/AddTrip'; 
import ViewTrips from './components/ViewTrips';
import EditTrip from './components/EditTrip';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-trip" element={<AddTrip />} />
                <Route path="/view-trips" element={<ViewTrips />} />
                <Route path="/edit-trip/:id" element={<EditTrip />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
