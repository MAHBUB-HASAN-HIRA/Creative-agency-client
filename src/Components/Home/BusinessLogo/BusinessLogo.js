import React from 'react';
import google from '../../../creative-agency-resources/images/logos/google.png';
import slack from '../../../creative-agency-resources/images/logos/slack.png';
import uber from '../../../creative-agency-resources/images/logos/uber.png';
import netflix from '../../../creative-agency-resources/images/logos/netflix.png';
import airbnb from '../../../creative-agency-resources/images/logos/airbnb.png';
import './BusinessLogo.css';

const BusinessLogo = () => {
    return (
        <section>
            <div className="container mt-5 mb-5 pb-5">
                <div className="row d-flex align-items-center logo_container">
                    <div className="col-md-2 mr-3 ml-3 col-sm-3">
                        <img src={slack} alt="slack" className="img-fluid"/>
                    </div>
                    <div className="col-md-2 mr-3 ml-3 col-sm-3">
                        <img src={google} alt="google" className="img-fluid"/>
                    </div>
                    <div className="col-md-2 mr-3 ml-3 col-sm-3">
                        <img src={uber} alt="uber" className="img-fluid"/>
                    </div>
                    <div className="col-md-2 mr-3 ml-3 col-sm-3">
                        <img src={netflix} alt="netflix" className="img-fluid"/>
                    </div>
                    <div className="col-md-2 mr-3 ml-3 col-sm-3">
                        <img src={airbnb} alt="airbnb" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessLogo;