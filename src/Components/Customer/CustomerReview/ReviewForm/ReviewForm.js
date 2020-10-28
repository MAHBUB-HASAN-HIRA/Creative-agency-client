import React from 'react';

const ReviewForm = () => {
    return (
        <div className='form_container'>
        <form> 
            <div className="form-group">
                <input type="text" className="form-control"  placeholder="Your name / Company's name"/>
            </div>
            <div class="form-group">
                <input type="email" className="form-control"  placeholder="Your email address"/>
            </div>
            <div className="form-group">
                <textarea  className="form-control" placeholder='Description' rows="4" />
            </div>
            <button type="submit" className="btn_brand">Submit</button>
        </form>
    </div>
    );
};

export default ReviewForm;