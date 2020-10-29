import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className='col-md-12 col-sm-6'>
            <div className="card mt-5 h-75 mb-5 p-1 text-center" >
                <div className="d-flex align-items-center pt-3 pl-3">
                    <img style={{width:'64px', height:'64px',borderRadius:'50%'}} className='mr-3 card-img' src={review.img} alt="clientPic"/>
                    <div>
                        <h5 className='font-weight-bold'>{review.name}</h5>
                        <h6>{review.title}</h6>
                    </div>
                </div>
                <div className="text-left pb-0 card_over card-body">
                    <p className='text-secondary'>{review.review_text}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;