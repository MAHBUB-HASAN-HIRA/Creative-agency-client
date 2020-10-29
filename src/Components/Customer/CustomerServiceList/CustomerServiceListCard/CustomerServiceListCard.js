import React from 'react';
import './CustomerServiceListCard.css'

const CustomerServiceListCard = ({serviceList}) => {
    console.log(serviceList);
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
        <div className="card card_height p-1" >
            <div className="d-flex align-items-center justify-content-between pt-3 pl-3">
                <img style={{width:'64px', height:'64px',borderRadius:'50%'}} className='mr-3 card-img' src={`data:image/jpeg;base64,${serviceList.image.img}`} alt="servicePic"/>
                <p className={customColor}>{serviceList.status}</p>
            </div>
            <div className="card-body card_over">
                <h5>{serviceList.service}</h5>
                <p className='text-secondary'>{serviceList.message}</p>
            </div>
        </div>
    </div>
    );
};

export default CustomerServiceListCard;