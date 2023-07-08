import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"
import { useRef } from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactInfoItem from './ContactInfoItem';


const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7s0nxy8', 'template_yqj0tg8', form.current, 'fq2i4g5OxRswg6jNG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const stars = document.querySelectorAll('.star');

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      // Mark all stars up to and including the clicked star as checked
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('checked');
      }
      
      // Unmark all stars after the clicked star as checked
      for (let i = index + 1; i < stars.length; i++) {
        stars[i].classList.remove('checked');
      }
    });
  });


  return (
    <div className="contact">
      {props.feedback ?
            <>
            <h2>Tell Us What You Think! We'd love to hear from you.</h2>
            </> : 
            <>
             <h2>Have a question or need assistance? We're just a message away.</h2>
            </>
        }
        <div className="contactus">
          <div className="left">
          {props.feedback ?
            <>
              <p className="DoubleQoutes">As a startup, we appreciate and value your input as it helps us improve and provide better services to our customers<span role="img" aria-label="Heart">❤️</span>.
                Your suggestions and comments are valuable to us, and we would be lucky to receive them. We are committed to 
                to listening to our customers and continuously striving to improve<span role="img" aria-label="Thumbs up">👍</span>.
                Thank you for taking the time to provide feedback and for being a part of our journey<span role="img" aria-label="Prayer hands">🙏</span>.</p>
            </> : 
            <>
              <ContactInfoItem icon={<MdLocalPhone size={30} />} text="+8801231" />
              <ContactInfoItem icon={<MdEmail size={30}/>} text="webcifar@gmail.com" />
              <ContactInfoItem text="Chittagong, Bangladesh" />
            </>
            }
          </div>
          <div className="right">
          {props.feedback ?
            <>
            <div class="rating">
            <p>Rate your experience with us!🙂</p>
            <span class="star" id="star1" onclick="rate(1)">&#9733;</span>
            <span class="star" id="star2" onclick="rate(2)">&#9733;</span>
            <span class="star" id="star3" onclick="rate(3)">&#9733;</span>
            <span class="star" id="star4" onclick="rate(4)">&#9733;</span>
            <span class="star" id="star5" onclick="rate(5)">&#9733;</span>
            </div>
            <form ref={form} onSubmit={sendEmail}>
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            </form>
            </> : 
            <>
            <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            </form>
            </>
        }
          </div>
        </div>
    </div>
  );
};

export default Contact;
