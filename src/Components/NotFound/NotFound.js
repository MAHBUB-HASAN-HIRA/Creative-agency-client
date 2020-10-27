import React from 'react';
import notFoundPic from '../../creative-agency-resources/images/404.png';

const NotFound = () => {
    return (
        <div className='container'>
            <img className='img-fluid' style={{margin:'20px 150px'}} src={notFoundPic} alt=""/>
        </div>
    );
};

export default NotFound;