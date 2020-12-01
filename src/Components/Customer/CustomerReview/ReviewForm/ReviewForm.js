import React from 'react';
import { useForm } from "react-hook-form";

const ReviewForm = ({loggedInUser}) => {
  
    const { register, handleSubmit } = useForm();
     const onSubmit = data => {
        const newReview = {...data, 'img': loggedInUser.photo};

        fetch('https://creative-agency-101.herokuapp.com/review?email=' + loggedInUser.email, {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
                "authorization" : `Bearer ${sessionStorage.getItem('token')}`
            },
            body:JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
            alert('Thank You For Your Review');
            window.location.reload();
            }})
            .catch(error =>{
                    alert('OPPS!!!. There are some trouble. Please Try again');
            });
     }

    return (
    <div className='form_container'>
        <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="form-group">
                <input name='name' defaultValue={loggedInUser.name} type="text" className="form-control" placeholder="Your name / Company's name" ref={register({ required: true })} />
            </div>
            <div className="form-group">
                <input name='title' type="text" className="form-control" placeholder="Your Title / Position" ref={register({ required: true })} />
            </div>
            <div className="form-group">
                <input name='email' defaultValue={loggedInUser.email} type="email" className="form-control"  placeholder="Your email address" ref={register({ required: true })} />
            </div>
            <div className="form-group">
                <textarea name='review_text'  className="form-control" placeholder='Description' rows="4" ref={register({ required: true })} />
            </div>
            <button type="submit" className="btn_brand">Submit</button>
        </form>
    </div>
    );
};

export default ReviewForm;