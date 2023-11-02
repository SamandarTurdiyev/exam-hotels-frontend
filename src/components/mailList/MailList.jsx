import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./mailList.css"
 const MailList = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26k40gm', 'template_4iw5zgq', form.current, 'sjH6gCYm2o7GLbs1w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="mailInputContainer">
      <div className="mail">
      <form ref={form} onSubmit={sendEmail}>
      <div className='formDiv'>
      <div className='formInputDiv'>
        {/* <p > Name</p> */}
      <input required className='input' type="text" name="user_name" placeholder='name'/>
        {/* <p > Email</p> */}
      <input required className='input' type="email" name="user_email" placeholder='email'/>
      </div>
     <div>
       {/* <p > Message</p> */}
     <textarea className='textarea' name="message" placeholder='message'/>
      {/* <input type="submit" value="Send" /> */}
      <button className='btn' type="submit" value="Send">Send</button>
     </div>   
      </div>
    </form>
      </div>
      </div>
    
    );
};

export default MailList