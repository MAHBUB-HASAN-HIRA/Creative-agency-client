import React from 'react';
import './ServicesCard.css';

const ServicesCard = ({service}) => {
    return (
        <div className='col-md-4 col-sm-6'>
           <div className="card service_card mt-3 mb-3  pt-3 text-center" >
                <img className='w-25 ml-auto mr-auto pt-3 card-img' src={service.img} alt="CardImageCap"/>
                <div className=" card-body">
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;