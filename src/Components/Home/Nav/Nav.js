import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../creative-agency-resources/images/logos/logo.png';
import './Nav.css';

const Nav = () => {
    const {loggedInUser, isAdmin, setLoggedInUser } = useContext(UserContext);

    const handleLogout = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('userInfo');
        sessionStorage.removeItem('token');
    }

    return (
       <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to='/'>
                    <img className='img-fluid logo' src={logo} alt="home"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav_Ul_container" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        { loggedInUser.email
                            ?   <li>
                                    <Link  className="nav-link" id='dashboard' to={isAdmin ? '/admin/serviceList' : '/dashboard/serviceList'}>Dashboard</Link>
                                </li>
                            :    <li>
                                    <Link  className="nav-link" id='dashboard' to='/login'>Dashboard</Link>
                                </li>
                        }
                        { loggedInUser.email &&
                            <li id='user_name'>
                                <h6>{loggedInUser.name}</h6>
                            </li>
                        }
                        { loggedInUser.email
                            ?  
                                <li>
                                   <Link onClick={handleLogout}  className="btn_brand" to='/login'>Logout</Link>
                                </li>
                            :    
                                <li>
                                    <Link  className="btn_brand" to='/login'>Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </nav>
       </div>
    );
};

export default Nav;