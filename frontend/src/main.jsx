import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={darkMode ? 'dark bg-black text-white' : 'bg-white text-black'}>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold underline">
          Welcome to the AI Video Sharing Platform!
        </h1>
        <div className="flex items-center justify-center mt-4 mb-8">
          <span className="mr-2 text-sm">{darkMode ? 'Dark' : 'Light'} Mode</span>
          <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
        <Register />
        <Login />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
