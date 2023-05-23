import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('controlled state: ', { username, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          onChange={(username) => setUsername(username.target.value)}
          value={username}
          type="text"
          placeholder="Username"
        />
      </label>
      <label>
        Password:
        <input
          onChange={(password) => setPassword(password.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
