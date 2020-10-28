import React from 'react';
import { Link } from 'react-router-dom';
import notFoundPic from '../../creative-agency-resources/images/404.png';

const NotFound = () => {
    return (
        <div className='container pt-3 '>
            <div className='text-center'>
                <Link className='text-white' to='/'><button className='btn_brand'>Home</button></Link>
            </div>
            <div className='w-100'>
                <img className='w-75 img-fluid' style={{margin:'20px 150px'}} src={notFoundPic} alt=""/>
            </div>
        </div>
    );
};

export default NotFound;