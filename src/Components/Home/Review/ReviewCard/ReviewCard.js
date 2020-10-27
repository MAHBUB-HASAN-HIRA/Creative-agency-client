import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className='col-md-12 col-sm-6'>
        <div className="card mt-5 mb-5 p-1 text-center" >
             <div className="d-flex align-items-center pt-3 pl-3">
                <img style={{width:'64px', height:'64px'}} className='mr-3 card-img' src={review.img} alt="CardImageCap"/>
                <div className=''>
                    <h5 className='font-weight-bold'>{review.name}</h5>
                    <h6>{review.title}</h6>
                </div>
             </div>
             <div className=" card-body">
                 <p className='text-secondary'>{review.review_text}</p>
             </div>
         </div>
     </div>
    );
};

export default ReviewCard;