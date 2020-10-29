import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from'../../../creative-agency-resources/images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faGripVertical, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { AdminContext } from '../../CheckAdmin/CheckAdmin';

const Sidebar = () => {

const isAdmin = useContext(AdminContext);

    return (
        <div>
           <div className='sidebar_container ml-5 mt-3'>
                <div className='site_logo_container'>
                    <Link to='/'><img className='w-100 site_logo' src={logo} alt=""/></Link>
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
                        </ul>

                    :
                        <ul className='for_customer'>
                            <li>
                                <Link className='sidebar_link' to="/customer/order"><FontAwesomeIcon icon={faShoppingCart} /> Order</Link>
                            </li>
                            <li>
                                <Link className='sidebar_link' to="/customer/serviceList"><FontAwesomeIcon icon={faGripVertical} /> Service list</Link>
                            </li>
                            <li>
                                <Link className='sidebar_link' to="/customer/review"><FontAwesomeIcon icon={faCommentAlt}/> Review</Link>
                            </li>
                        </ul>
                   }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;