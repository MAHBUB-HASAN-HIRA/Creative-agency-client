import React from 'react';
import './FooterForm.css'

const FooterForm = () => {
    return (
        <div className='mt-5'>
           <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Your email address"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Your name / Company's name"/>
                </div>
                <div class="form-group">
                    <textarea  class="form-control" placeholder='Your massage' rows="8" />
                </div>
                <input type='submit' class="btn_brand" value='Send'/>
            </form>
        </div>
    );
};

export default FooterForm;