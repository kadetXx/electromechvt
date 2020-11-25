import React from "react";
import "./Contact.scss";

import Form from "../../components/form/Form";

function Contact() {
  return (
    <div id="contact">
      <div className="page-title">
        <h1>Contact</h1>
      </div>

      <div className="wrap">
        <section className="section-one">
          <div className="contact-item">
            <h3>
              <span class="material-icons">location_on</span> Address
            </h3>
            <p>1224, 1st avenue Ikeja Lagos</p>
          </div>

          <div className="contact-item">
            <h3>
              <span class="material-icons">perm_phone_msg</span>Telephone
            </h3>

            <p>+234 937 827 2882</p>
          </div>
        </section>

        <section className="section-two">
          <h2 className="section-title">Send a message</h2>
          <Form />

          
          <section className = "location-section">
          <h2>Our Location</h2>
            <div className = "contact-map">
              <iframe
                title = "Map"
                width="100%"
                height="400"
                frameborder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1st%20avenue,%20Ikeja,%20Lagos+(ELECTROMECHANICS%20VERTICAL%20TRANSPORT)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://www.maps.ie/route-planner.htm">
                Google Route Planner
              </a>
            </div>
            <a href="https://www.maps.ie/route-planner.htm">
              Driving Route Planner
            </a>
          </section>
        </section>

        {/* <section className="section-three">
            
          </section> */}
      </div>
    </div>
  );
}

export default Contact;
