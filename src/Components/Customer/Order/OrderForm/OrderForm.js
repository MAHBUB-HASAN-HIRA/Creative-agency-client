import React, { useContext, useState } from 'react';
import './OrderForm.css';
import uploadLogo from'../../../../creative-agency-resources/images/uploadLogo.PNG';
import { UserContext } from '../../../../App';

const OrderForm = () => {
    const [loggedInUser] = useContext(UserContext);
    const [orderDetail, setOrderDetail] = useState({});
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
       const newOrderDetail = {...orderDetail};
       newOrderDetail[e.target.name] = e.target.value;
       newOrderDetail['status'] = 'Pending';
       setOrderDetail(newOrderDetail);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleOrderDetailSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', orderDetail.name);
        formData.append('orderEmail', orderDetail.orderEmail);
        formData.append('userEmail', loggedInUser.email);
        formData.append('service', orderDetail.service);
        formData.append('message', orderDetail.message);
        formData.append('price', orderDetail.price);
        formData.append('status', orderDetail.status);
      
            fetch('https://creative-agency-101.herokuapp.com/addOrder', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                alert('order Successfully Placed. Thanks For Order');
                setOrderDetail({});
                setFile(null);
                window.location.reload();
            })
                .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='form_container'>
            <form onSubmit={handleOrderDetailSubmit}> 
                <div className="form-group">
                    <input type="text" onChange={handleChange} name='name' className="form-control"  placeholder="Your name / Company's name" required/>
                </div>
                <div className="form-group">
                    <input type="email" onChange={handleChange} name='orderEmail' className="form-control"  placeholder="Your email address" required/>
                </div>
                <div className="form-group">
                    <input type="text" onChange={handleChange} name='service' className="form-control"  placeholder="Service Name" required/>
                </div>
                <div className="form-group">
                    <textarea  onChange={handleChange} name='message' className="form-control" placeholder='Your message' rows="4"  required/>
                </div>
                <div className="form-row mb-3 d-flex align-items-center">
                    <div className="form-group col-sm-6 my-1">
                        <input type="text" onChange={handleChange} name='price' className="form-control" placeholder="Price" required/>
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