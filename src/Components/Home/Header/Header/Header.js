import React from 'react';
import headerImg from '../../../../creative-agency-resources/images/Frame.png';

const Header = () => {
    return (
        <section className='container'>
            <div className="row mt-5 mb-5 d-flex align-items-center">
                <div className="col-md-5 p-5">
                    <h1 className='font-weight-bold'>Let’s Grow Your <br/>
                        Brand To The <br/>
                        Next Level
                    </h1>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet consectetur, adipisicing elit. Eaque commodi aliquam alias fugiat suscipit sint?</p>
                    <button class='btn_brand'>Hire Us</button>
                </div>
                <div className="col-md-7">
                    <img src={headerImg} className='img-fluid' alt=""/>
                </div>  
            </div>
        </section>
    );
};

export default Header;