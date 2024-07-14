// Messages.js
import React, { useEffect } from 'react';
import './styles/Messages.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages, deleteMessage, markMessageAsRead } from '../../store/slices/messagesSlice';
// import { useNavigate } from 'react-router-dom';

export default function Messages() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);

  // const loginStatus = useSelector((state)=>state.LoginStatus.isLoggedIn);
  // console.log(loginStatus)
  // const navigate = useNavigate();

  // useEffect(()=>{
  //   if (!loginStatus) {
  //     navigate('/adminLogin');
  //   }
  // },[]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        //const response = await axios.get('http://localhost:7777/messages/get');
        const response = await axios.get('https://buildwell-engineering.vercel.app/messages/get');
        dispatch(setMessages(response.data));
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [dispatch]);

  const handleMarkAsRead = async (id) => {
    try {
      //await axios.put(`http://localhost:7777/messages/markAsRead/${id}`);
      await axios.put(`https://buildwell-engineering.vercel.app/messages/markAsRead/${id}`);
      dispatch(markMessageAsRead(id));
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      //await axios.delete(`http://localhost:7777/messages/delete/${id}`);
      await axios.delete(`https://buildwell-engineering.vercel.app/messages/delete/${id}`);
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
            <div key={e._id} className="card m-2 p-2">
              <div className="card-body" style={{ borderColor: 'silver', borderWidth: '2px' }}>
                {e.readByAdmin === false && <h2 style={{ color: 'red', fontFamily: 'cursive' }}>New</h2>}
                <h5 className="card-title">{e.firstName} {e.lastName}</h5>
                <p className="card-text" style={{ color: '#4c66f9' }}>{e.email}</p>
                <p className="card-text" style={{ color: '#4c66f9' }}>{e.subject}</p>
                <p className="card-text" style={{ color: '#2C5F2D' }}>{e.message}</p>
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
