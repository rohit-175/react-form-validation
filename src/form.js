import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    countrycode: '+1',
    phone: '',
    country: '',
    city: '',
    pan: '',
    aadhar: ''
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'First Name is required';
    if (!formData.lastname) newErrors.lastname = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.pan) newErrors.pan = 'PAN No. is required';
    if (!formData.aadhar) newErrors.aadhar = 'Aadhar No. is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      
      navigate('/success', { state: { formData } });
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h2>SIGN-UP</h2>
        <div className="divider"></div>
        <div className="field-group">
          <div className='field'>
            <label>First Name</label>
            <input 
              type='text' 
              name='name'
              placeholder='Enter your first name'
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className='field'>
            <label>Last Name</label>
            <input 
              type='text' 
              name='lastname'
              placeholder='Enter your last name'
              value={formData.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <span className="error">{errors.lastname}</span>}
          </div>
        </div>
        <div className="field-group">
          <div className='field'>
            <label>Username</label>
            <input 
              type='text' 
              name='username'
              placeholder='Enter your username'
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div className='field password-container'>
            <label>Password</label>
            <input 
              type={passwordVisible ? 'text' : 'password'}
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
            />
            <span 
              className='show-password' 
              onClick={togglePasswordVisibility}>
              {passwordVisible ? 'Hide' : 'Show'}
            </span>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
        </div>
        <div className="field-group">
          <div className='field'>
            <label>E-mail</label>
            <input 
              type='email' 
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className='field phone-container'>
            <label>Phone No.</label>
            <select 
              name='countrycode'
              value={formData.countrycode}
              onChange={handleChange}
              style={{height:'30px' , marginBottom:"10px"}}
            >
              <option value='+1'>+1</option>
              <option value='+91'>+91</option>
              <option value='+44'>+44</option>
              
            </select>
            <input 
              type='text' 
              name='phone'
              placeholder='Phone number'
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>
        <div className="field-group">
          <div className='field'>
            <label>Country</label>
            <select 
              name='country'
              value={formData.country}
              onChange={handleChange}
              style={{height:'30px'}}
            >
              <option value=''>Select your country</option>
              <option value='India'>India</option>
              <option value='USA'>USA</option>
              <option value='UK'>UK</option>
              
            </select>
            {errors.country && <span className="error">{errors.country}</span>}
          </div>
          <div className='field'>
            <label>City</label>
            <select 
              name='city'
              value={formData.city}
              onChange={handleChange}
              style={{height:'30px'}}
            >
              <option value=''>Select your city</option>
              <option value='Mumbai'>New Delhi</option>
              <option value='New York'>New York</option>
              <option value='London'>London</option>
             
            </select>
            {errors.city && <span className="error">{errors.city}</span>}
          </div>
        </div>
        <div className="field-group">
          <div className='field'>
            <label>PAN No.</label>
            <input 
              type='text' 
              name='pan'
              placeholder='Enter your PAN No.' 
              value={formData.pan}
              onChange={handleChange}
            />
            {errors.pan && <span className="error">{errors.pan}</span>}
          </div>
          <div className='field'>
            <label>Aadhar No.</label>
            <input 
              type='text' 
              name='aadhar'
              placeholder='Enter your Aadhar No.' 
              value={formData.aadhar}
              onChange={handleChange}
            />
            {errors.aadhar && <span className="error">{errors.aadhar}</span>}
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;