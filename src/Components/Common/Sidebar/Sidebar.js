import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from'../../../creative-agency-resources/images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faGripVertical, faUserPlus, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {

const { loggedInUser, setLoggedInUser, isAdmin} = useContext(UserContext);

   const handleLogout = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('userInfo');
        sessionStorage.removeItem('token');
    }

    return (
        <div>
           <div className='sidebar_container ml-5 mt-3'>
                <div className='logoContainer'>
                    <div className='site_logo_container d-flex justify-content-between'>
                        <Link to='/'><img className='w-100 site_logo' src={logo} alt=""/></Link>
                    </div>
                </div>
                {/* for small device */}
                <div className='user_photo_container'>
                    <div className=' w-100 d-flex justify-content-between'>
                        <Link to='/'><img className='site_logo_small_div site_logo' src={logo} alt=""/></Link>
                        <img className='user_photo mr-3' src={loggedInUser.photo} alt=""/>
                    </div>
                </div>
                <div className='mt-5 sidebar_option'>
                    {
                        isAdmin ?
                        <ul className='for_admin'>
                            <li>
                                <Link className='sidebar_link' to="/admin/serviceList"><FontAwesomeIcon icon={faGripVertical}/> Service list</Link>
                            </li>
                            <li>
                                <Link className='sidebar_link' to="/admin/addService"><FontAwesomeIcon icon={faPlus}/> Add Services</Link>
                            </li>
                            <li>
                                <Link className='sidebar_link' to="/admin/makeAdmin"><FontAwesomeIcon icon={faUserPlus}/> Make Admin</Link>
                            </li>
                            <li>
                                <Link onClick={handleLogout} className='sidebar_link' to="#"><FontAwesomeIcon icon={faSignOutAlt}/> Logout</Link>
                            </li>
                        </ul>

                    :
                        <ul className='for_customer'>
                            <li>
                                <Link className='sidebar_link' to="/dashboard/order"><FontAwesomeIcon icon={faShoppingCart} /> Order</Link>
                            </li>
                            <li>
                                <Link className='sidebar_link' to="/dashboard/serviceList"><FontAwesomeIcon icon={faGripVertical} /> Service list</Link>
                            </li>
                            <li>
                                <Link className='sidebar_link' to="/dashboard/review"><FontAwesomeIcon icon={faCommentAlt}/> Review</Link>
                            </li>
                            <li>
                                <Link onClick={handleLogout} className='sidebar_link' to="#"><FontAwesomeIcon icon={faSignOutAlt}/>Logout</Link>
                            </li>
                        </ul>
                   }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;