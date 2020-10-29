import React, {useState } from 'react';
import uploadLogo from'../../../../creative-agency-resources/images/uploadLogo.PNG';
import './AddServiceForm.css';

const AddServiceForm = () => {

    const [addService, setAddService] = useState({});
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
       const newService = {...addService};
       newService[e.target.name] = e.target.value;
       setAddService(newService);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleAddSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', addService.title);
        formData.append('description', addService.description);
        
            fetch('https://creative-agency-101.herokuapp.com/addService', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    alert('Service Successfully Added By You.');
                    setAddService({});
                    setFile(null);
                    window.location.reload();
            })
                .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div className='form_container services_form_container'>
                <form> 
                    <div className="row w-100">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className='font-weight-5' for='services_title'>Services Title</label>
                                <input type="text" onChange={handleChange} name='title' className="form-control" id='services_title'  placeholder="Enter Title"/>
                            </div>
                            <div className="form-group">
                                <label for='services_des'>Description</label>
                                <textarea onChange={handleChange} name='description' className="form-control" id='services_des' placeholder='Enter Description' rows="4" />
                            </div>
                        </div>
                        <div className="form-row col-md-6 mb-3 ">
                            <div className="form-group col-sm-6 my-1">
                                <label className='' for='file-1'>Icon</label>
                                <input type="file" onChange={handleFileChange} name="file" id="file-1" className="inputFile inputFile-1" data-multiple-caption="{count} files selected" multiple=""/>
                                <label className='upload_label' for="file-1"><img className='upload_img' src={uploadLogo} alt="upload"/> <span>Upload project img</span></label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='mt-3 d-flex justify-content-end'>
                <button onClick={handleAddSubmit} type="submit" className="btn_submit btn_brand">Submit</button>
            </div>
        </div>
    );
};

export default AddServiceForm;