import React from 'react';
import './MakeAdminForm.css';

const MakeAdminForm = () => {
    return (
            <div className='form_container make_adminF services_form_container'>
                <form> 
                    <div className="row w-100">
                        <div className="form-row col-md-6 mb-3 ">
                            <label for='email'>Email</label>
                            <input type="email" className='form-control' name="email" placeholder='admin@gmail.com' id="email"/>
                        </div>
                        <div className="form-row d-flex justify-content-start col-md-6 mb-3 ">
                            <div>
                                <br/>
                                <button type="submit" className="btn_submit add_admin_btn btn_brand">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default MakeAdminForm;