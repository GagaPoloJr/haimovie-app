import { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import CardModalMovie from './components/cards/CardModalMovie';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import AppRoutes from './routes/route';
import Navbar from './components/Navbar';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="bg-white dark:bg-black">
        <Router>
          <Navbar />
          <AppRoutes />
          <CardModalMovie isOpen={openModal} handleCloseModal={handleCloseModal} />
          <ToastContainer />
        </Router>
      </div>
    </>
  );
};

export default App;
