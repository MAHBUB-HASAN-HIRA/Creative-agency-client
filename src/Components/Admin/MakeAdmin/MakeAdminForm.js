import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import './MakeAdminForm.css';

const MakeAdminForm = () => {

    const {loggedInUser} = useContext(UserContext);
    const [adminEmail, setAdminEmail] = useState('');
    const handleEmailChange = (e) => {
        const newEmail = {...adminEmail}
        newEmail[e.target.name] = e.target.value;
        setAdminEmail(newEmail);
    }

const handleSubmit = (e) => {
    e.preventDefault();
    if(adminEmail){
        fetch('https://creative-agency-101.herokuapp.com/makeAdmin?email='+ loggedInUser.email, {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
                "authorization" : `Bearer ${sessionStorage.getItem('token')}`
            },
            body:JSON.stringify(adminEmail)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Admin Successfully Added by You');
                setAdminEmail('');
                window.location.reload();
            }
        })
        .catch(error => {
            alert('OPPS!!! There are some problem. Please try again')
        });
    }
    else{
        alert('Please fillUp email Field');
    }
    
};


    return (
            <div className='form_container make_adminF services_form_container'>
                <form onSubmit={handleSubmit}> 
                    <div className="row w-100">
                        <div className="form-row col-md-6 mb-3 ">
                            <label for='email'>Email</label>
                            <input name='adminEmail' onChange={handleEmailChange} type="email" className='form-control' placeholder='admin@gmail.com' id="email"/>
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