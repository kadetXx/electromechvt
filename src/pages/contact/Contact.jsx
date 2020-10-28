import React from "react";
import "./Contact.scss";

import Form from '../../components/form/Form'

function Contact() {
  return (
    <div id='contact'>
      <div className='page-title'>
        <h1>Contact</h1>
      </div>

      <div className='wrap'>
        <section className='section-one'>
          <div className='contact-item'>
            <h3>
              <span class='material-icons'>location_on</span> Address
            </h3>
            <p>1224, 1st avenue Ikeja Lagos</p>
          </div>

          <div className='contact-item'>
            <h3>
              <span class='material-icons'>perm_phone_msg</span>Telephone
            </h3>

            <p>+234 937 827 2882</p>
          </div>
        </section>

        <section className="section-two">
          <h2 className="section-title">
            Send a message
          </h2>
          <Form />
        </section>
      </div>
    </div>
  );
}

export default Contact;
