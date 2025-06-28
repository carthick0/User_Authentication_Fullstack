import { useState } from 'react';
import axios from 'axios';

export const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/v1/users', form);
      alert('✅ Registered!');
      console.log(res.data);
    } catch (err: unknown) {
      alert('❌ Registration failed');
      if (axios.isAxiosError(err) && err.response) {
        console.log(err.response.data);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

      <input
        name="name"
        placeholder="Name"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        onChange={handleChange}
      />
      <input
        name="email"
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
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        onClick={handleSubmit}
      >
        Register
      </button>
    </div>
  );
};
