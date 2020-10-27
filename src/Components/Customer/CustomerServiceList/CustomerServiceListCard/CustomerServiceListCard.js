import React from 'react';
import './CustomerServiceListCard.css'

const CustomerServiceListCard = ({serviceList}) => {

    let customColor = 'status_contain';

    if(serviceList.status === 'Pending'){
        customColor = 'pending status_contain'
    }
    else if(serviceList.status === 'Done'){
        customColor = 'done status_contain'
    }
    else if(serviceList.status === 'On going'){
        customColor = 'on_going status_contain';
    }

    return (
        <div className='col-md-5 mt-3 mb-3 col-sm-6'>
        <div className="card p-1" >
            <div className="d-flex align-items-center justify-content-between pt-3 pl-3">
                <img style={{width:'64px', height:'64px'}} className='mr-3 card-img' src={serviceList.img} alt="CardImageCap"/>
                <p className={customColor}>{serviceList.status}</p>
            </div>
            <div className="card-body">
                <h5>{serviceList.title}</h5>
                <p className='text-secondary'>{serviceList.description}</p>
            </div>
        </div>
    </div>
    );
};

export default CustomerServiceListCard;