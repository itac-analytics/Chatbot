import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // You can add your authentication logic here
    if (username === 'your_username' && password === 'your_password') {
      // Successful login, you can navigate to the main page
      alert('Login successful');
    } else {
      // Failed login, you can display an error message
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="form-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;



