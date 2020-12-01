import React from 'react';
import { Link } from 'react-router-dom';
import notFoundPic from '../../creative-agency-resources/images/404.png';

const NotFound = () => {
    return (
        <div className='container pt-3 '>
            <div className='text-center mt-5'>
                <Link className='text-white' to='/'><button className='btn_brand'>Home</button></Link>
            </div>
            <div className='w-100 mt-3'>
                <img className='w-75 d-block img-fluid ml-auto mr-auto' src={notFoundPic} alt=""/>
            </div>
        </div>
    );
};

export default NotFound;