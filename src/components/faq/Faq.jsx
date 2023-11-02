import React, { useState } from 'react';
import './faq.css';

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    
  <div className="faq">
    <div className="faqLeft">
    <h5 className="faqLeftTitle">FAQs about hotels in Tashkent</h5>
    </div>
    <div className="faq-accordion">
      <div className="faq-items">
        <div
          className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => toggleAccordion(1)}
        >
          <div className="faq-question">How much does it cost to stay in a hotel in Tashkent?</div>
          {activeIndex === 1 && <div className="faq-answer">On average, 3-star hotels in Tashkent cost UZS 864,256 per night, and 4-star hotels in Tashkent are UZS 1,612,188 per night. If you're looking for something really special, a 5-star hotel in Tashkent can on average be found for UZS 3,083,003 per night (based on Booking.com prices).</div>}
        </div>
        <div
          className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => toggleAccordion(2)}
        >
          <div className="faq-question">How much is a hotel in Tashkent for this weekend?</div>
          {activeIndex === 2 && <div className="faq-answer">The average price per night for a 3-star hotel in Tashkent this weekend is UZS 797,351 or, for a 4-star hotel, UZS 1,505,642. Looking for something even fancier? 5-star hotels in Tashkent for this weekend cost on average around UZS 1,881,794 per night (based on Booking.com prices).</div>}
        </div>
        <div
          className={`faq-item ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => toggleAccordion(3)}
        >
          <div className="faq-question">How much is a hotel in Tashkent for tonight?</div>
          {activeIndex === 3 && <div className="faq-answer">On average, it costs UZS 1,036,464 per night to book a 3-star hotel in Tashkent for tonight. You'll pay on average around UZS 1,442,643 if you choose to stay in a 4-star hotel tonight, while a 5-star hotel in Tashkent will cost around UZS 2,101,236 (based on Booking.com prices).</div>}
        </div>
        <div
          className={`faq-item ${activeIndex === 4 ? 'active' : ''}`}
          onClick={() => toggleAccordion(4)}
        >
          <div className="faq-question">How much does it cost to stay in a hotel in Tashkent?</div>
          {activeIndex === 4 && <div className="faq-answer">On average, 3-star hotels in Tashkent cost UZS 864,256 per night, and 4-star hotels in Tashkent are UZS 1,612,188 per night. If you're looking for something really special, a 5-star hotel in Tashkent can on average be found for UZS 3,083,003 per night (based on Booking.com prices).</div>}
        </div>
        <div
          className={`faq-item ${activeIndex === 5 ? 'active' : ''}`}
          onClick={() => toggleAccordion(5)}
        >
          <div className="faq-question">How much is a hotel in Tashkent for this weekend?</div>
          {activeIndex === 5 && <div className="faq-answer">The average price per night for a 3-star hotel in Tashkent this weekend is UZS 797,351 or, for a 4-star hotel, UZS 1,505,642. Looking for something even fancier? 5-star hotels in Tashkent for this weekend cost on average around UZS 1,881,794 per night (based on Booking.com prices).</div>}
        </div>
        <div
          className={`faq-item ${activeIndex === 6 ? 'active' : ''}`}
          onClick={() => toggleAccordion(6)}
        >
          <div className="faq-question">How much is a hotel in Tashkent for tonight?</div>
          {activeIndex === 6 && <div className="faq-answer">On average, it costs UZS 1,036,464 per night to book a 3-star hotel in Tashkent for tonight. You'll pay on average around UZS 1,442,643 if you choose to stay in a 4-star hotel tonight, while a 5-star hotel in Tashkent will cost around UZS 2,101,236 (based on Booking.com prices).</div>}
        </div>
      </div>
    </div>
  </div>
   
  );
};

export default FaqAccordion;