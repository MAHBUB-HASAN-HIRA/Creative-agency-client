import React from 'react';
import Sidebar from '../../Common/Sidebar/Sidebar';
import ReviewForm from './ReviewForm/ReviewForm';

const CustomerReview = () => {
    return (
        <section>
        <div className="row">
         <div className="col-md-2">
                 <Sidebar/>
             </div>
             <div className="col-md-10 pl-5">
                 <div className=' d-flex align-items-center justify-content-between mt-3 mb-3 pl-3 pr-3'>
                     <h3>Review</h3>
                     <h5>Mahbub Hasan</h5>
                 </div>
                 <div  className='dashboard_right_container'>
                    <ReviewForm/>
                 </div>
             </div>
        </div>
     </section>
    );
};

export default CustomerReview;