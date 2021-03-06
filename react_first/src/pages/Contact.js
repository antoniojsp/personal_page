import React from "react";
import "../styles/Home.css";

function Contact() {
  return (
      <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.0904248398037!2d-123.0826889845003!3d44.04018747910988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11e3807fd59c7%3A0x551a1f097e1a69a4!2s1790%20Alder%20St%2C%20Eugene%2C%20OR%2097401!5e0!3m2!1sen!2sus!4v1655844513286!5m2!1sen!2sus" 
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
            <br/><br/>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                1790 Alder St. <br />
                Eugene, Oregon, 97401
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed" href="mailto:antonios@uoregon.edu">
                 antonios@uoregon.edu</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">562-396-3775</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;