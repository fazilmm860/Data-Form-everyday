import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';


import Navbar from './components/Navbar';
import DefaultTable from './components/tables/DefaultTable.jsx';
import { Switch } from '@material-tailwind/react';
import HomePage from './components/HomePage';
import FormDatas from './components/forms/FormDatas';
import ImageUploadForm from './components/forms/ImageUploadForm';
import ImageTable from './components/tables/ImageTable'
import ImageGrid from './components/tables/ImageGrid';
import Register from './components/loginPage/Register';
import Login from './components/loginPage/Login';
import PasswordReset from './components/loginPage/PasswordReset';
import ForgotPassword from './components/loginPage/ForgotPassword';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from './components/ContextProvider/Context';
import Error from './components/loginPage/Error'
import { Box, CircularProgress } from '@mui/material';
import AdminPage from './components/AdminPage';
import ViewPage from './components/viewpage/ViewPage';
import RegistrationLink from './components/loginPage/Registration';


function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext)

  const history = useNavigate()

  const DashboardValid = async () => {
    let token = localStorage.getItem("userdatatoken");

    const res = await fetch("https://everyday-finance-solution-crm-backend.onrender.com/api/validuser", {
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
      {
        data ? (
          <>

            <Navbar />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/form" element={<FormDatas />} />
              <Route path="/image" element={<ImageUploadForm />} />
              <Route path="/result-table" element={<DefaultTable />} />
              <Route path="/view/:itemId" element={<ViewPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/getImage" element={<ImageTable />} />
              <Route path="/registration" element={<RegistrationLink />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
              <Route path="*" element={<Error />} />

            </Routes>



          </>
        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }






    </>





  );
}

export default App;
