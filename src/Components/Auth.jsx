import React, { useState } from 'react';
import axios from 'axios';
import { getRegisterUrl, getLoginUrl } from '../Services/EmployeeService';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(getRegisterUrl(), formData);
      setMessage(response.data.message);
      setFormData({ name: '', email: '', password: '' }); 
    } catch (error) {
      setMessage(error.response?.data?.message || 'Registration failed');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(getLoginUrl(), {
        email: formData.email,
        password: formData.password,
      });
      setMessage(response.data.message);
      setToken(response.data.token);
      setFormData({ email: '', password: '' });

      // Store the username for greeting in EmployeeList
      localStorage.setItem('username', response.data.user.name); 
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed');
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>

        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Password"
          />
        </div>

        {message && <p className="text-center text-red-500 mb-4">{message}</p>}

        <button
          onClick={isLogin ? handleLogin : handleRegister}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? 'New to the site?' : 'Already have an account?'}{' '}
          <button
            onClick={toggleMode}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            {isLogin ? 'Register here' : 'Login here'}
          </button>
        </p>
      </div>

      {token && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
          <p>Token: {token}</p>
        </div>
      )}
    </div>
  );
};

export default Auth;
