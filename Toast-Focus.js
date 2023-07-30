// App.js

import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => {
    toast('Hello, World!');
  }

  return (
    <div className="App">
      <button onClick={notify}>Notify me!</button>
      <ToastContainer />
    </div>
  );
}

export default App;

