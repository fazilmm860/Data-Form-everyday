import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Navbar from './components/Navbar';

import DefaultTable from './components/DefaultTable.jsx';
import { Switch } from '@material-tailwind/react';
import HomePage from './components/HomePage';
import FormData from './components/forms/FormData';
import ImageUploadForm from './components/ImageUploadForm';


function App() {
  return (
    <div>
      {/* <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormData />} />
            <Route path="/admin" element={<DefaultTable />} />
          </Routes>
        </div>
      </Router> */}
      <ImageUploadForm />
    </div>





  );
}

export default App;
