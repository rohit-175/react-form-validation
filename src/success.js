import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';

const Success = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div className='container'>
      <h2>Form Submitted Successfully</h2>
      <div className="divider"></div>
      <div className="field-group">
        <div className='field'>
          <label>Name:</label>
          <p>{formData.name}</p>
        </div>
        <div className='field'>
          <label>Last Name:</label>
          <p>{formData.lastname}</p>
        </div>
      </div>
      <div className="field-group">
        <div className='field'>
          <label>Username:</label>
          <p>{formData.username}</p>
        </div>
        <div className='field'>
          <label>Email:</label>
          <p>{formData.email}</p>
        </div>
      </div>
      <div className="field-group">
        <div className='field'>
          <label>Phone No.:</label>
          <p>{formData.countrycode} {formData.phone}</p>
        </div>
        <div className='field'>
          <label>Country:</label>
          <p>{formData.country}</p>
        </div>
      </div>
      <div className="field-group">
        <div className='field'>
          <label>City:</label>
          <p>{formData.city}</p>
        </div>
        <div className='field'>
          <label>PAN No.:</label>
          <p>{formData.pan}</p>
        </div>
      </div>
      <div className="field-group">
        <div className='field'>
          <label>Aadhar No.:</label>
          <p>{formData.aadhar}</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
