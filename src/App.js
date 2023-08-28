import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Navbar from './components/Navbar';

import DefaultTable from './components/tables/DefaultTable.jsx';
import { Switch } from '@material-tailwind/react';
import HomePage from './components/HomePage';
import FormData from './components/forms/FormData';
import ImageUploadForm from './components/ImageUploadForm';
import ImageTable from './components/tables/ImageTable'
import ImageGrid from './components/tables/ImageGrid';
import Register from './components/loginPage/Register';
import Login from './components/loginPage/Login';
import PasswordReset from './components/loginPage/PasswordReset';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormData />} />
            <Route path="/image" element={<ImageUploadForm />} />
            <Route path="/admin" element={<DefaultTable />} />
            <Route path="/getImage" element={<ImageTable />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-reset" element={<PasswordReset />} />
          </Routes>

        </div>


      </Router>


    </div>





  );
}

export default App;
