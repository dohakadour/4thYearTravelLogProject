import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink className="navbar-brand" to="/">Travel Log</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/add-trip">Add Trip</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/view-trips">View Trips</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavigationBar;
