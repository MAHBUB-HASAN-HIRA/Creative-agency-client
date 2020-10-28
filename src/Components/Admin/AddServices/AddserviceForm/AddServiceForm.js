import React from 'react';
import uploadLogo from'../../../../creative-agency-resources/images/uploadLogo.PNG';
import './AddServiceForm.css';

const AddServiceForm = () => {
    return (
        <div>
            <div className='form_container services_form_container'>
                <form> 
                    <div className="row w-100">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className='font-weight-5' for='services_title'>Services Title</label>
                                <input type="text" className="form-control" id='services_title'  placeholder="Enter Title"/>
                            </div>
                            <div className="form-group">
                                <label for='services_des'>Description</label>
                                <textarea  className="form-control" id='services_des' placeholder='Enter Description' rows="4" />
                            </div>
                        </div>
                        <div className="form-row col-md-6 mb-3 ">
                            <div className="form-group col-sm-6 my-1">
                                <label className='' for='file-1'>Icon</label>
                                <input type="file" name="file-1[]" id="file-1" className="inputFile inputFile-1" data-multiple-caption="{count} files selected" multiple=""/>
                                <label className='upload_label' for="file-1"><img className='upload_img' src={uploadLogo} alt="upload"/> <span>Upload project img</span></label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='mt-3 d-flex justify-content-end'>
                <button type="submit" className="btn_submit btn_brand">Submit</button>
            </div>
        </div>
    );
};

export default AddServiceForm;