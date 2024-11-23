import React from 'react';

function Login({ credentials, handleChange, handleLogin }) {
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>  
        <input
          type="email" 
          name="email"  
          value={credentials.email}  
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mt-4">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
        Login
      </button>
    </form>
  );
}

export default Login;
