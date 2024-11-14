import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

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
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/academic">Academic Career</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects">Project Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">Contact Me</Link>
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