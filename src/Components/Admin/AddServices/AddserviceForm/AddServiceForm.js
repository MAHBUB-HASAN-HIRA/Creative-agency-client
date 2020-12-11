import React, {useContext, useState } from 'react';
import uploadLogo from'../../../../creative-agency-resources/images/uploadLogo.PNG';
import './AddServiceForm.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';

const AddServiceForm = () => {
    const {loggedInUser} = useContext(UserContext);
    const [file, setFile] = useState(null);
    const { register, handleSubmit } = useForm();


    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleAddSubmit = data => {
        if(file){
            const formData = new FormData();
            formData.append('file', file);
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('price', data.price);

            fetch('https://creative-agency-101.herokuapp.com/addService?email=' + loggedInUser.email, {
                method: 'POST',
                headers:{
                    "authorization" : `Bearer ${sessionStorage.getItem('token')}`
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Service Successfully Added By You.');
                setFile(null);
                window.location.reload();
            })
            .catch(error => {
                alert('OPPS!!! There are some problem. Please try again');
            });
        }
        else{
            alert('Please upload project image')
        };
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleAddSubmit)}> 
                <div className='form_container services_form_container'>
                    <div className="row w-100">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className='font-weight-5' for='services_title'>Services Title</label>
                                <input type="text" name='title' className="form-control" id='services_title'  placeholder="Enter Title" required ref={register({ required: true })}/>
                            </div>
                            <div className="form-group">
                                <label for='services_des'>Description</label>
                                <textarea name='description' className="form-control" id='services_des' placeholder='Enter Description' rows="4" required ref={register({ required: true })}/>
                            </div>
                        </div>
                        <div className="form-row col-md-6 mb-3 ">
                            <div className="form-group col-sm-6 my-1">
                                <div className="form-group">
                                    <label className='font-weight-5' for='services_price'>Services price</label>
                                    <input type="number" name='price' className="form-control" id='services_price'  placeholder="Enter Price" required ref={register({ required: true })}/>
                                </div>
                                <label className='' for='file-1'>Icon</label>
                                <input type="file" onChange={handleFileChange} name="file" id="file-1" className="inputFile inputFile-1" data-multiple-caption="{count} files selected" multiple=""/>
                                <label className='upload_label' for="file-1"><img className='upload_img' src={uploadLogo} alt="upload"/> <span>Upload project img</span></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-3 d-flex justify-content-end'>
                    <button type="submit" className="btn_submit btn_brand">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddServiceForm;