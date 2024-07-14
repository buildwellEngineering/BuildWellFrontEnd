import React, { useState } from 'react';
import './styles/ContactUs.css';
import axios from 'axios';

export default function ContactUs() {
  const [data, setData] = useState({});

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      // const response = await axios.post('http://localhost:7777/messages/form/submit', { data });
      const response = await axios.post('https://buildwell-engineering.vercel.app/messages/form/submit', { data });
      console.log("Form data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id="ContactUs" className="scroll-section">
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
            <p className="py-2" style={{ fontWeight: 'lighter', fontSize: '1.2rem' }}>
              For any inquiries, questions or commendations, please call: 123-456-7890 or fill out the following form
            </p>
            <form onSubmit={submitHandler}>
              <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={data.firstName} onChange={changeHandler} required />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" name="lastName" value={data.lastName} onChange={changeHandler} required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" name="email" value={data.email} onChange={changeHandler} required />
              </div>
              <div>
                <label>Subject</label>
                <input type="text" name="subject" value={data.subject} onChange={changeHandler} required />
              </div>
              <div>
                <label>Message</label>
                <textarea name="message" value={data.message} onChange={changeHandler} required ></textarea>
              </div>
              <div className='grid'>
                <input className='' type="submit" name="submit" value="Submit" />
              </div>
            </form>
          </div>

          <div className="col-12 col-lg-5 contact-right">
            <div className="address">
              <h2 className="py-2" style={{ color: '#00365E' }}>Head Office</h2>
              <p className="py-2" style={{ fontWeight: 'lighter', fontSize: '1.2rem' }}>
                322 Arenja Corner, plot no. 73 <br />
                SEC-17 VASHI, NAVI-MUMBAI
              </p>
              <p className="py-2" style={{ fontWeight: 'lighter', fontSize: '1.2rem' }}>
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
