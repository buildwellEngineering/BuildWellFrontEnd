import React, { useState } from 'react';
import './styles/ContactUs.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';

// Utility function to sanitize input
const sanitizeInput = (input) => {
  // Trim whitespace from both ends
  let sanitized = input.trim();
  
  // Basic encoding to prevent HTML injection (XSS)
  sanitized = sanitized.replace(/&/g, "&amp;")
                       .replace(/</g, "&lt;")
                       .replace(/>/g, "&gt;")
                       .replace(/"/g, "&quot;")
                       .replace(/'/g, "&#x27;")
                       .replace(/\//g, "&#x2F;");
  
  return sanitized;
};

// Utility function to validate email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function ContactUs() {

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://buildwellengineering.com",
    "name": "Contact BuildWell Construction",
    "description": "Get in touch with BuildWell Construction for any inquiries regarding our services.",
    "mainEntity": {
      "@type": "ContactPoint",
      "telephone": "+91-1234567890",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": "English"
    }
  }
  
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});


  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const formErrors = {};
    if (!data.firstName || data.firstName.trim() === "") {
      formErrors.firstName = "First name is required.";
    }
    if (!data.lastName || data.lastName.trim() === "") {
      formErrors.lastName = "Last name is required.";
    }
    if (!data.email || !isValidEmail(data.email)) {
      formErrors.email = "Valid email is required.";
    }
    if (!data.subject || data.subject.trim() === "") {
      formErrors.subject = "Subject is required.";
    }
    if (!data.message || data.message.trim() === "") {
      formErrors.message = "Message is required.";
    }
    return formErrors;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    // Validate the form before submitting
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Sanitize all form fields before submission
    const sanitizedData = {
      firstName: sanitizeInput(data.firstName || ''),
      lastName: sanitizeInput(data.lastName || ''),
      email: sanitizeInput(data.email || ''),
      subject: sanitizeInput(data.subject || ''),
      message: sanitizeInput(data.message || ''),
    };

    console.log(sanitizedData)


    try {
      const response = await axios.post(`https://buildwell-engineering.vercel.app/messages/form/submit`, { data:sanitizedData });
      alert('Message sent successfully !!!')
      setData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });

      // Scroll to the top of the page after the alert is closed
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id="ContactUs" className="scroll-section">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <div className="container text-center py-5">
        <h1 className="contact-us-title" style={{color:'#00365E',fontSize:'2.5rem'}}>CONTACT US</h1>
        <div className="contactUsLine mb-1 mx-auto"></div>
      </div>
      <div className="container map justify-content-center d-flex py-4">
        <div className="row">
          <div className="col-12 d-lg-block d-none">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15087.101852961821!2d73.0166431!3d19.0296134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3eaaa53c4e3%3A0x9459161291e7ded5!2sTerna%20Engineering%20College!5e0!3m2!1sen!2sin!4v1714456799929!5m2!1sen!2sin" 
              width="980"
              height="400"
              style={{ border: '2px solid silver' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="1">
            </iframe>
          </div>
          <div className="col-12 d-md-block d-none d-lg-none">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4756650888185!2d73.02050307497653!3d19.042812982154942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db5e2c85cd%3A0xef26c52d7d73816e!2sSIES%20Graduate%20School%20of%20Technology!5e0!3m2!1sen!2sin!4v1711868027053!5m2!1sen!2sin"
              width="600"
              height="400"
              style={{ border: '2px solid silver' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="2">
            </iframe>
          </div>
          <div className="col-12 d-md-none d-sm-block">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4756650888185!2d73.02050307497653!3d19.042812982154942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db5e2c85cd%3A0xef26c52d7d73816e!2sSIES%20Graduate%20School%20of%20Technology!5e0!3m2!1sen!2sin!4v1711868027053!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: '2px solid silver' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="3">
            </iframe>
          </div>
        </div>
      </div>

      <div className="container contact py-4 px-xl-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-5 contact-left">
            <h2 className="py-2" style={{ color: '#00365E' }}>Inquiries</h2>
            <p className="py-2" style={{ fontWeight: 'light', fontSize: '1.2rem' }}>
              For any inquiries, questions or commendations, please call: 123-456-7890 or fill out the following form
            </p>
            <form onSubmit={submitHandler}>
              <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={data.firstName} onChange={changeHandler} required />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" name="lastName" value={data.lastName} onChange={changeHandler} required />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
              </div>
              <div>
                <label>Email</label>
                <input type="email" name="email" value={data.email} onChange={changeHandler} required />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div>
                <label>Subject</label>
                <input type="text" name="subject" value={data.subject} onChange={changeHandler} required />
                {errors.subject && <p className="error">{errors.subject}</p>}
              </div>
              <div>
                <label>Message</label>
                <textarea name="message" value={data.message} onChange={changeHandler} required ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <div className='grid'>
                <input className='' type="submit" name="submit" value="Submit" />
              </div>
            </form>
          </div>

          <div className="col-12 col-lg-5 contact-right">
            <div className="address">
              <h2 className="py-2" style={{ color: '#00365E' }}>Head Office</h2>
              <p className="py-2" style={{ fontWeight: 'light', fontSize: '1.2rem' }}>
                322 Arenja Corner, plot no. 73 <br />
                SEC-17 VASHI, NAVI-MUMBAI
              </p>
              <p className="py-2" style={{ fontWeight: 'light', fontSize: '1.2rem' }}>
                info@mysite.com <br />
                Tel: 123-456-7890 <br />
                Fax: 123-456-7890
              </p>
            </div>
            <div className="quote mt-auto">
              <h2 className="py-2" style={{ color: '#00365E' }}>Get a quote: 123-456-7890</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
