import { Link, NavLink,useLocation  } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// import 'bootstrap/dist/js/bootstrap.js';



const Navigation =() => {
    
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
  return (
    <nav className="navbar navbar-expand-md menu_head">
        <div className="container p-md-0">
            <Link className="navbar-brand"  as={Link} to="/">
                <img src="/images/DKEG 2.png" alt="menu_logo" />
            </Link>
            {/* <a className="navbar-brand" href="index.html"><img src="images/DKEG 2.png" alt="menu_logo" className="img-fluid"/></a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse main_menu" id="navbarNav">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        {/* <NavLink className="nav-link " eventKey="1" as={Link} to="/">Home</NavLink> */}
                        <NavLink to="/"  className={"underline nav-link" + (url === "/" ?" active" : "")}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"underline nav-link" + (url === "/about" ?" active" : "")} to="/about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"underline nav-link" + (url === "/games" ?" active" : "")} to="/games">Games</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"underline nav-link" + (url === "/promotion" ?" active" : "")} to="/promotion">Promotion</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"underline nav-link" + (url === "/membership" ?" active" : "")} to="/membership">MemberShip</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"underline nav-link" + (url === "/contact" ?" active" : "")} to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  className={"underline nav-link" + (url === "/404" ?" active" : "")} to="/404">404</NavLink>
                    </li>
                </ul>
                {/* <NavLink eventKey="8" as={Link} to="/signup">SignUp</NavLink>
                <NavLink eventKey="9" as={Link} to="/login">Login</NavLink> */}
            </div>
        </div>
    </nav>
  );
}

export default Navigation;