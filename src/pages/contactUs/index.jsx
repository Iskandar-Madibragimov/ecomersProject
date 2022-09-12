import React from "react";
import { ContactWrapper, Info, Location, Map } from "./styles";

function Contact() {
  return (
    <ContactWrapper>
      <Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3169.945928178941!2d-122.06125500000002!3d37.391111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7227e1ef8ff%3A0x1cbb80d811f16025!2sBeverly%20St%2C%20Mountain%20View%2C%20CA%2094043!5e0!3m2!1sen!2sus!4v1659562761906!5m2!1sen!2sus"
            width="800"
            height="800"
            style={{border:0}}
            // allowfullscreen=""
            // loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
      </Map>
      <Info>
        <Location>
          <div className="left-div">
            <p className="place">GERMANY</p>
            <p className="address">
              952 Boulevard Brune
              <br />
              Rd, Heaven Stress,
              <br />
              Beverly Hill, BA 75014 Paris
            </p>
            <p className="time">
              Monday – Friday: 9:00-20:00
              <br /> Saturady: 11:00 – 15:00
            </p>
            <p>
              (+100) 666-456-7890
              <br />
              Gosto@google.com
            </p>
          </div>
          <div className="right-div">
            <p className="place">NEW YORK</p>
            <p className="address">
              952 Boulevard Brune
              <br />
              Rd, Heaven Stress,
              <br />
              Beverly Hill, BA 75014 Paris
            </p>
            <p className="time">
              Monday – Friday: 9:00-20:00
              <br /> Saturady: 11:00 – 15:00
            </p>
            <p>
              (+100) 666-456-7890
              <br />
              Gosto@google.com
            </p>
          </div>
        </Location>
        <form>
          <p>Fill out the form and we'll get back soon!</p>
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <textarea placeholder="Message" />
          <button>Send Message</button>
        </form>
      </Info>
    </ContactWrapper>
  );
}

export default Contact;
