import React, { useState } from 'react';

const ReviewForm = ({loggedInUser}) => {

    const [review, setReview] = useState({});

     const handleChange = (e) => {
        const newReview = {...review, 'img': loggedInUser.photo};
        newReview[e.target.name] = e.target.value;
        setReview(newReview)
     }

     const handleSubmit = (e) => {
         e.preventDefault();
         fetch('http://localhost:5000/review', {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data => {
              if(data){
                alert('Thank You For Your Review');
                window.location.reload();
              }});
     }

    return (
        <div className='form_container'>
        <form onSubmit={handleSubmit}> 
            <div className="form-group">
                <input name='name' type="text" onChange={handleChange} className="form-control" placeholder="Your name / Company's name" required/>
            </div>
            <div className="form-group">
                <input name='email' type="email" onChange={handleChange} className="form-control"  placeholder="Your email address" required/>
            </div>
            <div className="form-group">
                <textarea name='review_text' onChange={handleChange}  className="form-control" placeholder='Description' rows="4" required/>
            </div>
            <button type="submit" className="btn_brand">Submit</button>
        </form>
    </div>
    );
};

export default ReviewForm;