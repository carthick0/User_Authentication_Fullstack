import { useState } from 'react';
import { Register } from './components/Register';
import { Login } from './components/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">User Auth</h1>

      {showLogin ? <Login /> : <Register />}

      <p className="mt-4 text-sm">
        {showLogin ? (
          <>
            Don’t have an account?{' '}
            <button
              className="text-blue-600 underline"
              onClick={() => setShowLogin(false)}
            >
              Register here
            </button>
          </>
        ) : (
          <>
            Already registered?{' '}
            <button
              className="text-blue-600 underline"
              onClick={() => setShowLogin(true)}
            >
              Login here
            </button>
          </>
        )}
      </p>
    </div>
  );
}

export default App;
