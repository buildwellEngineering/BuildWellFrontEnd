

import React, { useEffect } from 'react';
import './styles/Messages.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages, deleteMessage, markMessageAsRead } from '../../store/slices/messagesSlice';
import useAxiosInstance from '../../axiosInstance/AxiosInstance';

// Utility function to decode HTML entities
const decodeHTML = (input) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = input;
  return textArea.value;
};

export default function Messages() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        //const response = await axios.get('http://localhost:7777/messages/get');
        // const response = await axios.get('https://buildwell-engineering.vercel.app/messages/get',{withCredentials:true});
        
        const response = await axiosInstance.get('/messages/get');

        // Sort messages by date in descending order
        const sortedMessages = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        dispatch(setMessages(sortedMessages));
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []); // dispatch

  const handleMarkAsRead = async (id) => {
    try {
      //await axios.put(`http://localhost:7777/messages/markAsRead/${id}`);
      // await axios.put(`https://buildwell-engineering.vercel.app/messages/markAsRead/${id}`);
      await axiosInstance.put(`/messages/markAsRead/${id}`);

      dispatch(markMessageAsRead(id));
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      //await axios.delete(`http://localhost:7777/messages/delete/${id}`);
      // await axios.delete(`https://buildwell-engineering.vercel.app/messages/delete/${id}`);

      await axiosInstance.delete(`/messages/delete/${id}`);
      dispatch(deleteMessage(id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {messages && messages.length > 0 ? (
          messages.map((e) => (
            <div key={e._id} className="card m-2 p-2" style={{ borderColor: '#00365E', borderWidth: '5px' }}>
              <div className="card-body" >
                {e.readByAdmin === false && <h2 style={{ color: 'red', fontFamily: 'cursive' }}>New</h2>}
                <h5 className="card-title" style={{ color: '#EDCD1F', fontSize:'1.5rem', fontWeight:'bold' }}><span style={{color:'#00365E'}}>Name: </span>{decodeHTML(e.firstName)} {decodeHTML(e.lastName)}</h5>
                <br />
                <p className="card-text" style={{ color: '#EDCD1F', fontSize:'1.5rem', fontWeight:'bold' }}><span style={{color:'#00365E'}}>Email: </span>{decodeHTML(e.email)}</p>
                <p className="card-text" style={{ color: '#EDCD1F', fontSize:'1.5rem', fontWeight:'bold' }}><span style={{color:'#00365E'}}>Subject: </span>{decodeHTML(e.subject)}</p>
                <p className="card-text" style={{ color: '#EDCD1F', fontSize:'1.5rem', fontWeight:'bold' }}><span style={{color:'#00365E'}}>Message: </span>{decodeHTML(e.message)}</p>
                <div className="col-12 text-end px-5 py-2">
                  {e.readByAdmin === false && (
                    <button type="button" id="MarkAsReadBtn" onClick={() => handleMarkAsRead(e._id)} className='mx-1'>
                      Mark As Read
                    </button>
                  )}
                  <button type="button" id="DeleteMessageBtn" onClick={() => handleDeleteMessage(e._id)} className='mx-1'
                    style={{background: "#00365e", color: "#edcd1f", padding: "0.5rem 1rem", border: "none", cursor: "pointer"}}
                    >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2>
            Empty message box !!!
          </h2>
        )}
      </div>
    </div>
  );
}
