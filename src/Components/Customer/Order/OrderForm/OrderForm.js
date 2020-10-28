import React from 'react';
import './OrderForm.css';
import uploadLogo from'../../../../creative-agency-resources/images/uploadLogo.PNG';
const OrderForm = () => {
    return (
        <div className='form_container'>
            <form> 
                <div className="form-group">
                    <input type="text" className="form-control"  placeholder="Your name / Company's name"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control"  placeholder="Your email address"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"  placeholder="Service Name"/>
                </div>
                <div className="form-group">
                    <textarea  className="form-control" placeholder='Your massage' rows="4" />
                </div>
                <div className="form-row mb-3 d-flex align-items-center">
                    <div className="form-group col-sm-6 my-1">
                        <input type="text" className="form-control" placeholder="Price"/>
                    </div>
                    <div className="form-group col-sm-6 my-1">
                        <input type="file" name="file-1[]" id="file-1" className="inputFile inputFile-1" data-multiple-caption="{count} files selected" multiple=""/>
                        <label className='upload_label' for="file-1"><img className='upload_img' src={uploadLogo} alt="upload"/> <span>Upload project img</span></label>
                    </div>
                </div>
                <button type="submit" className="btn_brand">Submit</button>
            </form>
        </div>
    );
};

export default OrderForm;