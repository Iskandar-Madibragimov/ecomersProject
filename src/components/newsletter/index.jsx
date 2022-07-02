import React from "react";
import { NewsActions, NewsletterInfo, NewsletterWrapper } from "./style";

function Newsletter() {
  return (
    <NewsletterWrapper>
      <NewsletterInfo>
        <p className="color font">Our Newsletter</p>
        <h2>UP TO 30% OFF ITEMS</h2>
        <p>
          Subscribe to the Gosto mailing list to receive updates on new arrivals
        </p>
        <p>& other discount information.</p>
        <NewsActions>
          <input type="text" placeholder="Your email address"/>
          <button>Subscribe</button>
        </NewsActions>
      </NewsletterInfo>
    </NewsletterWrapper>
  );
}

export default Newsletter;
