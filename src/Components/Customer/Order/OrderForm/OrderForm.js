import React, { useContext, useState } from 'react';
import './OrderForm.css';
import uploadLogo from'../../../../creative-agency-resources/images/uploadLogo.PNG';
import { UserContext } from '../../../../App';
import { useForm } from "react-hook-form";

const OrderForm = () => {
    const {loggedInUser} = useContext(UserContext);
    const [file, setFile] = useState(null);
    const service = JSON.parse(sessionStorage.getItem('service'));
    const { register, handleSubmit} = useForm();

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

const handleOrderDetailSubmit = data => {
    if(file || service){
        const formData = new FormData();
        const newOrderDetail = {...data, };
        const newFile = file ? file : JSON.stringify(service.image);
        formData.append('file', newFile);
        formData.append('name', newOrderDetail.name);
        formData.append('orderEmail', newOrderDetail.orderEmail);
        formData.append('userEmail', loggedInUser.email);
        formData.append('service', newOrderDetail.service);
        formData.append('message', newOrderDetail.message);
        formData.append('price', newOrderDetail.price);
        formData.append('status', 'Pending');
        
        fetch('https://creative-agency-101.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                alert('order Successfully Placed. Thanks For Order');
                setFile(null);
                sessionStorage.removeItem('service');
                window.location.reload();
            };
        })
        .catch(error => {
            if(error){
                alert('OPPS!!! There are some problem. Please try again');
            }; 
        });  
    }
    else{
        alert('Please upload project image.');
    };
};

    return (
        <div className='form_container'>
            <form onSubmit={handleSubmit(handleOrderDetailSubmit)}> 
                <div className="form-group">
                    <input type="text" defaultValue={loggedInUser.name} name='name' className="form-control"  placeholder="Your name / Company's name" ref={register({ required: true })}/>
                </div>
                <div className="form-group">
                    <input type="email" defaultValue={loggedInUser.email} name='orderEmail' className="form-control"  placeholder="Your email address" ref={register({ required: true })}/>
                </div>
                <div className="form-group">
                    <input type="text" defaultValue={service && service.title} name='service' className="form-control"  placeholder="Service Name" ref={register({ required: true })}/>
                </div>
                <div className="form-group">
                    <textarea  name='message' className="form-control" placeholder='Your message' rows="4"  ref={register({ required: true })}/>
                </div>
                <div className="form-row mb-3 d-flex align-items-center">
                    <div className="form-group col-sm-6 my-1">
                        <input type="number" defaultValue={service && service.price} name='price' className="form-control" placeholder="Price" ref={register({ required: true })}/>
                    </div>
                    <div className="form-group col-sm-6 my-1">
                        <input type="file" onChange={handleFileChange} name="file" id="file-1" className="inputFile inputFile-1" data-multiple-caption="{count} files selected" multiple=""/>
                        <label className='upload_label' for="file-1"><img className='upload_img' src={uploadLogo} alt="upload"/> <span>Upload project img</span></label>
                    </div>
                </div>
                <button type="submit" className="btn_brand">Submit</button>
            </form>
        </div>
    );
};

export default OrderForm;