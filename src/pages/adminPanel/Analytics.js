import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Analytics() {

  const [data,setData] = useState({
    projects:0,
    messages:0
  });

  useEffect(()=>{
    try{
      // const response = axios.get('http://localhost:7777/admin/counters');

      // setData(response.counters);
      setData({
        projects:10,
        messages:10
      })
    }
    catch(error){
      console.log(error);
    }
  },[])

  

  return (
    <div className='p-4'>
      {/* <h1>Analytics</h1>
      <p>Analytics content goes here...</p> */}
      <>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='projectCounter col-12 col-md-6 col-lg-3 m-2 p-4 rounded-4 d-flex flex-column justify-content-center' style={{boxShadow:"0 0 4px #00365e",backgroundColor:'#00365e',color:'#edcd1f',minHeight:'200px'}}>
              <h3 style={{fontFamily:'cursive'}}>
                Projects:
              </h3>
              <h3 style={{fontFamily:'cursive'}}>
                {data.projects}
              </h3>
            </div>

            <div className='messageCounter col-12 col-md-6 col-lg-3 m-2 p-4 rounded-4 d-flex flex-column justify-content-center' style={{boxShadow:"0 0 4px #00365e",backgroundColor:'#00365e',color:'#edcd1f',minHeight:'200px'}}>
              <h3 className=''style={{fontFamily:'cursive'}}>
                Messages:
              </h3>
              <h3 style={{fontFamily:'cursive'}}>
                {data.messages}
              </h3>
            </div>

            {/* <div className='messageCounter col-12 col-md-6 col-lg-3 m-2 p-4 rounded-4 d-flex flex-column justify-content-center' style={{boxShadow:"0 0 4px #00365e",backgroundColor:'#00365e',color:'#edcd1f',minHeight:'200px'}}>
              <h3 style={{fontFamily:'cursive'}}>
                Messages:
              </h3>
              <h3 style={{fontFamily:'cursive'}}>
                {data.messages}
              </h3>
            </div> */}
          </div>
        </div>
      </>
    </div>
  );
}
