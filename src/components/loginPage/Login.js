import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
    const [passShow, setPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });
    const history = useNavigate();

    const setVal = (e) => {
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };
    const loginuser = async (e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else {
            const url = `http://localhost:5000/api`
            const data = await fetch(`${url}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const res = await data.json();

            if (res.status === 201) {
                localStorage.setItem("usersdatatoken", res.result.token);
                history("/")
                setInpval({ ...inpval, email: "", password: "" })
            } else {
                toast.error("Invalid Credentials", {
                    position: "top-center"
                });
            }
        }
    }
    return (
        <>
            <div className="flex justify-center items-center h-screen">

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:max-w-md">

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={setVal}
                            value={inpval.email}

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type={!passShow ? "password" : "text"}
                            placeholder="Password"
                            name="password"
                            value={inpval.password}
                            onChange={setVal}

                        />
                        <div className="showpass" onClick={() => setPassShow(!passShow)}>
                            {!passShow ? "Show" : "Hide"}
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={loginuser}


                        >
                            Sign Up
                        </button>
                    </div>

                    <p style={{ color: "black", fontWeight: "bold" }}>Don't have an Account ?<NavLink to="/login"></NavLink></p>
                    <p style={{ color: "black", fontWeight: "bold" }}>Forgot Password  <NavLink to="/password-reset">Click Here</NavLink> </p>

                </form>
                <ToastContainer />
            </div >
        </>
    )
}

export default Login;