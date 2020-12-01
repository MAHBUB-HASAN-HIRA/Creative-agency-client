import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCard.css';

const ServicesCard = ({service}) => {
const handleService = service => sessionStorage.setItem('service', JSON.stringify(service));

    return (
            <div className='col-md-4 col-sm-6'>
                <Link className='card_link' to='/dashboard/order'> 
                    <div onClick={() => handleService(service)} className="card service_card mt-3 mb-3 text-center" >
                        <img className='w-25 ml-auto mr-auto card-img' src={`data:image/jpeg;base64,${service.image.img}`} alt="ServicePic"/>
                        <div className="card-body">
                            <h5>{service.title}</h5>
                            <p>{service.description}</p>
                        </div>
                    </div>
                </Link>
            </div>
    );
};

export default ServicesCard;