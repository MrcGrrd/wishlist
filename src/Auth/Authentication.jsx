import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginForm from './Login';
import RegisterForm from './Register';
import { getLoginUrl, getRegisterUrl } from '../Services/EmployeeService'; 

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Handle input field changes
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(getRegisterUrl(), {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      });
      setMessage('Registration successful! You can now log in.');
      setIsLogin(true);
    } catch (error) {
      console.error("Registration Error:", error.response);
      setMessage('Registration failed. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login credentials being sent:", credentials);
    try {
      const response = await axios.post(getLoginUrl(), {
        email: credentials.email,  // Send 'email' instead of 'name'
        password: credentials.password
      });
      if (response.data.ok) {
        setMessage(`Welcome back, ${response.data.data.name}!`);
        navigate('/employees');
      } else {
        setMessage('Invalid username or password.');
      }
    } catch (error) {
      console.error("Login Error:", error.response);
      setMessage('Login failed. Please check your username and password.');
    }
  };
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        
        {isLogin ? (
          <LoginForm
            credentials={credentials}  
            handleChange={handleChange}
            handleLogin={handleLogin}
          />
        ) : (
          <RegisterForm
            credentials={credentials}
            handleChange={handleChange}
            handleRegister={handleRegister}
          />
        )}

        {message && <p className="text-center text-red-500">{message}</p>}

        <div className="text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
            }}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
