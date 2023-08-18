import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormData from './components/FormData';
import Navbar from './components/Navbar';
import Dummy from './components/Dummy';
import DefaultTable from './components/DefaultTable.jsx';
import { Switch } from '@material-tailwind/react';


function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<FormData />} />
            <Route path="/admin" element={<DefaultTable />} />
          </Routes>
        </div>
      </Router>

    </div>





  );
}

export default App;
