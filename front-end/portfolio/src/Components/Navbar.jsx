import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/navbar.css";

function Navbar() {
    return (
        <div className="navigation-bar">
            <div className="container-fluide navbar-container">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="logo">
                            <img src="" alt="Logo" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <ul className="navbar">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/academic" className="nav-link">Academic Career</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link">Project Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-2">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar