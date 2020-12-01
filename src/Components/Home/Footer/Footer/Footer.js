import React from 'react';
import FooterForm from '../FooterForm/FooterForm';
import FooterText from '../FooterText/FooterText';

const Footer = () => {
    return (
       <section style={{backgroundColor:'#FBD062'}}>
           <div className="container pb-5 mt-5 pt-3">
               <div className="row pb-5 mt-5 mb-5">
                    <div className="col-md-6">
                        <FooterText/>
                    </div>
                    <div className="col-md-6">
                        <FooterForm/>
                    </div>
               </div>
               <p className='mt-3 text-center'>Copyright Creative Agency 2020</p>
           </div>
       </section>
    );
};

export default Footer;