import React from "react";
import "./About.scss";

function About() {
  return (
    <div id='about'>
      <div className='page-title'>
        <h1>About Us</h1>
      </div>

      <section className='section-one'>
        <h2>Who We Are</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis
          diam a sapien bibendum, sed posuere nibh porttitor. Vivamus rutrum
          tincidunt nisl, in dapibus magna fermentum vitae. Cras varius rhoncus
          lobortis. Aliquam facilisis pharetra magna, congue dictum tortor
          ornare quis. Vestibulum congue aliquam nibh a auctor. Nullam aliquam
          vitae tellus quis varius. Fusce semper vitae felis sed fringilla. In
          hac habitasse platea dictumst. Ut rhoncus nisl at magna efficitur
          hendrerit. Curabitur cursus varius condimentum. Nullam et mi posuere,
          elementum quam vitae, mollis lacus. Nullam id velit ac dolor tristique
          ornare. Vivamus vel magna et turpis ullamcorper interdum. Proin
          blandit nulla malesuada, vehicula dolor quis, elementum magna.
        </p>

        <p>
          Nulla elit urna, viverra id magna a, consectetur imperdiet lacus.
          Phasellus placerat metus in dolor varius pretium. Quisque dapibus est
          diam, vitae venenatis risus imperdiet et. Curabitur vitae lectus in
          urna commodo ultricies. Ut euismod urna eros, et eleifend arcu
          vehicula sed. Mauris varius justo risus, faucibus vestibulum leo
          egestas nec. Aliquam pulvinar urna eget lorem sollicitudin, quis
          faucibus ante euismod. Nulla eget tincidunt libero.
        </p>
      </section>

      <section className='section-two'>
        <div className='text-container'>
          <h2>What We Do</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            venenatis diam a sapien bibendum, sed posuere nibh porttitor.
            Vivamus rutrum tincidunt nisl, in dapibus magna fermentum vitae.
            Cras varius rhoncus lobortis. Aliquam facilisis pharetra magna,
            congue dictum tortor ornare quis. Vestibulum congue aliquam nibh a
            auctor. Nullam aliquam vitae tellus quis varius. Fusce semper vitae
            felis sed fringilla. In hac habitasse platea dictumst. Ut rhoncus
            nisl at magna efficitur hendrerit. Curabitur cursus varius
            condimentum. Nullam et mi posuere, elementum quam vitae, mollis
            lacus. Nullam id velit ac dolor tristique ornare. Vivamus vel magna
            et turpis ullamcorper interdum. Proin blandit nulla malesuada,
            vehicula dolor quis, elementum magna.
          </p>
        </div>

        <div className='img-container'>
          <img src='/assets/img/eleicontwo.png' alt='' />
        </div>
      </section>

      <section>
        <h2>Why We Do It</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis
          diam a sapien bibendum, sed posuere nibh porttitor. Vivamus rutrum
          tincidunt nisl, in dapibus magna fermentum vitae. Cras varius rhoncus
          lobortis. Aliquam facilisis pharetra magna, congue dictum tortor
          ornare quis. Vestibulum congue aliquam nibh a auctor. Nullam aliquam
          vitae tellus quis varius. Fusce semper vitae felis sed fringilla. In
          hac habitasse platea dictumst. Ut rhoncus nisl at magna efficitur
          hendrerit. Curabitur cursus varius condimentum. Nullam et mi posuere,
          elementum quam vitae, mollis lacus. Nullam id velit ac dolor tristique
          ornare. Vivamus vel magna et turpis ullamcorper interdum. Proin
          blandit nulla malesuada, vehicula dolor quis, elementum magna.
        </p>
      </section>
    </div>
  );
}

export default About;
