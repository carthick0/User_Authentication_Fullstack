import { useState } from 'react';
import axios from 'axios';

export const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/v1/login', form);
      alert('✅ Logged in!');
      console.log(res.data);
      console.log(res.data.token)
      localStorage.setItem('token', res.data.token); 
    } catch (err: unknown) {
      alert('❌ Login failed');
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data || err.message);
      } else if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-6 border border-gray-300 rounded"
        onChange={handleChange}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
      >
        Login
      </button>
    </div>
  );
};
