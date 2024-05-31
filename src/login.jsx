import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (username === '' || password === '') {
    //   setError('Username and password cannot be empty');
    //   return;
    // }
    if (username !== 'user' || password !== 'password') {
      setError('Invalid username or password');
      return;
    }
    setError('');
    setIsLoggedIn(true);
  };
  if (isLoggedIn) {
    return <div>
         <h1>Login Page</h1>
        Welcome, {username}!
        
        </div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <h1>Login Page</h1>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default LoginPage;
