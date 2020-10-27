import React from 'react';

const ReviewForm = () => {
    return (
        <div className='form_container'>
        <form> 
            <div class="form-group">
                <input type="text" class="form-control"  placeholder="Your name / Company's name"/>
            </div>
            <div class="form-group">
                <input type="email" class="form-control"  placeholder="Your email address"/>
            </div>
            <div class="form-group">
                <textarea  class="form-control" placeholder='Description' rows="4" />
            </div>
            <button type="submit" class="btn_brand">Submit</button>
        </form>
    </div>
    );
};

export default ReviewForm;