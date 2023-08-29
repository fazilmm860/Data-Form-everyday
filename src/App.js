import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';



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
import ForgotPassword from './components/loginPage/ForgotPassword';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from './components/ContextProvider/Context';
import Error from './components/loginPage/Error'

function App() {
  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext)

  const history = useNavigate()

  const DashboardValid = async () => {
    let token = localStorage.getItem("userdatatoken");

    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }

    })
    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data)
      history("/admin");
    }
  }
  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setData(true)
    }, 2000)
  }, [])
  return (
    <>

      <>
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
          <Route path="/forgot-password/:id/tok" element={<ForgotPassword />} />
          <Route path="*" element={<Error />} />
        </Routes>



      </>





    </>





  );
}

export default App;
