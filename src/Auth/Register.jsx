import React from 'react';

function Register({ credentials, handleChange, handleRegister }) {
  return (
    <form onSubmit={handleRegister}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="name"  // Change this to 'name' instead of 'username'
          value={credentials.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mt-4">
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
        Register
      </button>
    </form>
  );
}

export default Register;
