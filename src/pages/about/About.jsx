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
          Incorporated in 2014, we are a vertical transport company with
          knowledge and distinctive competence in handling vertical transport
          systems such as lifts, escalators, hydraulic platforms, and overhead
          hoist cranes. In addition to this, we also handle door and window
          automation.
        </p>

        <p>
          Whether you are working on a new development, exchanging or renewing a
          lease, or have an existing vertical transport system, we are readily
          available to attend to your needs, whatsoever they might be.
        </p>

        <p>
          By engaging our services you will be bringing onboard your project, a
          team of technicians with over thirty years of cumulative industry
          experience spanning across private, corporate, as well as government
          agency projects. Add to this the knowledge benefit of handling a vast
          array of lifts and escalator brands, and you have yourself a team
          that’s guaranteed to give your project the best.
        </p>
      </section>

      <section className='section-two'>
        <div className='text-container'>
          <h2>What We Do</h2>

          <p>
            At Electro-Mechanics Vertical Transport, we understand that every
            project is peculiar, and it is our goal to ensure that the solutions
            we deliver speak to such peculiarities. When delivered, our
            solutions are always in full compliance with relevant standards and
            regulations, while ensuring that we stay within the budget and
            deliver in good time.
          </p>

          <p>
            From IMEM Lifts of Santander, Spain, to Hidral Hydraulic Platform in
            Sevilla, Spain, to Topp Automatic of Sandrigo, Italy, we go the
            extra mile to ensure you get best-in-class products that will serve
            you well and enhance vertical mobility in your buildings.
          </p>
        </div>

        <div className='img-container'>
          <img src='/assets/img/eleicontwo.png' alt='' />
        </div>
      </section>

      <section>
        <h2>OEM Patners</h2>

        <p>
          <b>IMEM LIFTS</b> is one of Europe’s leading lifts manufacturers with
          a well established reputation for quality and reliability since 1968.
          They occupy a particularly competitive position in the market, and are
          one of the few fully independent lifts company on the continent, able
          to offer an almost limitless range of lifts and components.
        </p>

        <p>
          <b>HIDRAL</b> is a company with almost forty (40) years of experience
          in the industry of elevation and accessibility. Since their entry into
          the market, Hidral has gone on to become a specialist in the field of
          Hydraulics. They have also extended their services to other sectors,
          offering traction and VVVF solutions as well.
        </p>

        <p>
          <b>TOPP AUTOMATION DOORS</b> offers a line of sliding pedestrian door
          automation, designed and produced on the principle of quality,
          reliability and design. They offer a wide range of simple, functional
          systems for the automation of doors and windows, designed to simplify
          our daily movement.
        </p>
      </section>
    </div>
  );
}

export default About;
