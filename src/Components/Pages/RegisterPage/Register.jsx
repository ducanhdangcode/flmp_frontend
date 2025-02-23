import React, { useEffect, useState } from 'react'
import RegisterBackground from './backgroundLogin.jpg';
import { Link, useNavigate } from 'react-router-dom';
import RegisterBoxBackground from './backgroundRegisterBox.jpg';
import WebFont from 'webfontloader';
import './Register.css';
import { userRegister } from '../../../APIService/UserService.';
import {toast, ToastContainer} from  'react-toastify';
import { useSpinnerContext } from '../../../Context/SpinnerContext';
import { FaEye } from "react-icons/fa";

const Register = () => {
    // placeholder 
    const [lastnamePlaceholder, setLastnamePlaceholder] = useState("Type your lastname");
    const [firstnamePlaceholder, setFirstnamePlaceholder] = useState("Type your firstname");
    const [usernamePlaceholder, setUsernamePlaceholder] = useState("Type your username");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Type your password");
    const [rePasswordPlaceholder, setRePasswordPlaceholder] = useState("Re-type your password");
    const [emailPlaceholder, setEmailPlaceholder] = useState("Type your e-mail");

    // infor management
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    const navigate = useNavigate();

    const {displaySpinner, setDisplaySpinner} = useSpinnerContext();

    // display password
    const [displayPassword, setDisplayPassword] = useState(false);

    // check validation
    const CheckPassword = () => {
        let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
        return password.length >= 12 && /[A-Z]/.test(password) && /\d/.test(password) && specialChars.test(password);
    }

    const checkEmail = () => {
        if (email.length <= 10) {
            return false;
        } 
        return email.substring(email.length - 10) === "@gmail.com";
    }

    // change display password option
    const changeDisplayPassword = () => {
        displayPassword === true ? setDisplayPassword(false) : setDisplayPassword(true);
    }

    // reset when focus
    const onFocusUsername = () => {
        setUsernamePlaceholder("");
    }

    const onFocusPassword = () => {
        setPasswordPlaceholder("");
    }

    const onFocusEmail = () => {
        setEmailPlaceholder("");
    }

    const onFocusFirstname = () => {
        setFirstnamePlaceholder("");
    }

    const onFocusLastname = () => {
        setLastnamePlaceholder("");
    }

    const onFocusRePassword = () => {
        setRePasswordPlaceholder("");
    }

    // on change
    const onHandleChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onHandleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onHandleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onHandleChangeFirstname = (e) => {
        setFirstname(e.target.value);
    }

    const onHandleChangeLastname = (e) => {
        setLastname(e.target.value);
    }

    const onHandleChangeRePassword = (e) => {
        setRePassword(e.target.value);
    }

    const onHandleCheckBox = (e) => {
        checkbox ? setCheckbox(false) : setCheckbox(true);
    }

    // check ok
    const checkCanRegister = () => {
        return firstname && lastname && checkbox && username.length >= 5 && CheckPassword() && checkEmail() && rePassword === password;
    }

    // submit
    const handleSubmit = () => {
        // handle error
        if (!firstname || !lastname || !checkbox) {
            toast("Please fill all the information", {
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: "bg-red-500 text-white font-bold p-4 rounded-lg shadow-lg",
                progressClassName: "bg-white",
            })
        }

        if (username.length < 5) {
            toast("Username must be at least 5 characters", {
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: "bg-red-500 text-white font-bold p-4 rounded-lg shadow-lg",
                progressClassName: "bg-white",
            })
            setUsername("");
        }

        if (!CheckPassword()) {
            toast("Your password is too weak, please try again!", {
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: "bg-red-500 text-white font-bold p-4 rounded-lg shadow-lg",
                progressClassName: "bg-white",
            })
            setPassword("");
            setRePassword("");
        }

        if (!checkEmail()) {
            toast("Email must in xxx@gmail.com format", {
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: "bg-red-500 text-white font-bold p-4 rounded-lg shadow-lg",
                progressClassName: "bg-white",
            })
            setEmail("");
        }

        if (rePassword !== password) {
            toast("Your re-type password doesn't match, please try again!", {
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: "bg-red-500 text-white font-bold p-4 rounded-lg shadow-lg",
                progressClassName: "bg-white",
            })
            setRePassword("");
        }

        // handle can register
        if (checkCanRegister()) {
            userRegister(username, password, email, firstname, lastname);
            toast("Sign up successfully", {
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: "bg-green-500 text-white font-bold p-4 rounded-lg shadow-lg",
                progressClassName: "bg-white",
            })

            setTimeout(() => {
                setDisplaySpinner(true)
            }, 1000);

            setTimeout(() => {
                setDisplaySpinner(false);
                navigate("/login")
            }, 1500);
        }
    }

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu', 'Titillium', 'Changa'],
            }
        })
    })
  return (
    <form onSubmit = {(e) => e.preventDefault()}>
        <div className = "w-full overflow-x-clip overflow-y-clip h-[65rem]">
            {/* background image */}
            <img src = {RegisterBackground} alt = "" className = "absolute left-0 top-0 w-[100vw] h-full"/>

            {/* register box */}
            <div className = "flex h-[42rem] w-[70%] bg-white relative top-[10rem] left-[15%] rounded-[8px]">
                {/* image beside the register box */}
                <div className = "w-[50%] h-full rounded-tl-[8px] rounded-bl-[8px]">
                    <img src = {RegisterBoxBackground} alt = "" className = "w-full h-full rounded-tl-[8px] rounded-bl-[8px]"/>
                </div>

                {/* register form */}
                <div className = "w-[50%] rounded-tr-[8px] rounded-br-[8px]">
                    {/* title */}
                    <p className = "text-center text-3xl font-bold text-[#052b33] mt-[1rem]">Register to <span className = "text-[#ebc94e]">FLMP</span></p>

                    {/* firstname and lastname */}
                    <div className = "flex">
                        {/* lastname */}
                        <div className = "">
                            <div className = "">
                                <p className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "1.2rem", top: "0.5rem"}}>Lastname</p>
                                <input 
                                    type = "text"
                                    placeholder = {lastnamePlaceholder}
                                    className = "h-9 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu left-[1rem] top-[1rem] w-[80%]"
                                    style = {{borderWidth: "1px", borderStyle: "inset"}}
                                    onFocus = {onFocusLastname}
                                    onBlur = {() => setLastnamePlaceholder("Type your lastname")}
                                    value = {lastname}
                                    onChange = {onHandleChangeLastname}
                                />
                            </div>
                        </div>

                        {/* firstname */}
                        <div className = "">
                            <div>
                                <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "0.2rem", top: "0.5rem"}}>Firstname</label>
                                <input 
                                    type = "text"
                                    placeholder = {firstnamePlaceholder}
                                    className = "h-9 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu left-[0rem] top-[1rem]"
                                    style = {{borderWidth: "1px", borderStyle: "inset"}}
                                    onFocus = {onFocusFirstname}
                                    onBlur = {() => setFirstnamePlaceholder("Type your firstname")}
                                    value = {firstname}
                                    onChange = {onHandleChangeFirstname}
                                />
                            </div>
                        </div>
                    </div>

                    {/* username */}
                    <div className = "relative top-[2rem]">
                        <div>
                            <p className = "font-ubuntu text-lg font-white float-left relative text-black font-bold left-[1rem]">Username</p>
                            <input 
                                type = "text"
                                placeholder = {usernamePlaceholder}
                                className = "h-9 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu top-[0.5rem] w-[90%] left-[1rem]"
                                style = {{borderWidth: "1px", borderStyle: "inset"}}
                                onFocus = {onFocusUsername}
                                onBlur = {() => setUsernamePlaceholder("Type your username")}
                                value = {username}
                                onChange = {onHandleChangeUsername}
                            />
                        </div>
                    </div>

                    {/* email */}
                    <div className = "relative top-[4rem]">
                        <div className = "">
                            <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold left-[1rem]">E-mail</label>
                            <input 
                                type = "text"
                                placeholder = {emailPlaceholder}
                                className = "h-9 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu w-[90%] top-[2rem] left-[-2.2rem]"
                                style = {{borderWidth: "1px", borderStyle: "inset"}}
                                onFocus = {onFocusEmail}
                                onBlur = {() => setEmailPlaceholder("Type your e-mail")}
                                value = {email}
                                onChange = {onHandleChangeEmail}
                            />
                        </div>
                    </div>

                    {/* password */}
                    <div>
                        <div className = "relative top-[7rem]">
                            <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "1rem"}}>Password</label>
                            <input 
                                type = {displayPassword === true ? "text" : "password"}
                                placeholder = {passwordPlaceholder}
                                className = "h-9 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu w-[90%] left-[1rem] top-[0.5rem]"
                                style = {{borderWidth: "1px", borderStyle: "inset"}}
                                onFocus = {onFocusPassword}
                                onBlur = {() => setPasswordPlaceholder("Type your password")}
                                onChange = {onHandleChangePassword}
                                value = {password}
                            />
                            <FaEye className = "w-[2rem] h-[2rem] absolute right-[3rem] bottom-[-0.4rem] hover:cursor-pointer" onClick = {changeDisplayPassword}/>
                        </div>
                    </div>

                    {/* re-type password */}
                    <div className = "relative top-[8.5rem]">
                        <div className = "">
                            <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "1rem"}}>Re-type password</label>
                            <input 
                                type = "password"
                                placeholder = {rePasswordPlaceholder}
                                className = "h-9 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu w-[90%] top-[0.5rem] left-[1rem]"
                                style = {{borderWidth: "1px", borderStyle: "inset"}}
                                onFocus = {onFocusRePassword}
                                onBlur = {() => setRePasswordPlaceholder("Re-type your password")}
                                value = {rePassword}
                                onChange = {onHandleChangeRePassword}
                            />
                        </div>
                    </div>

                    {/* checkbox */}
                    <div className = "relative left-4 mt-[10rem]">
                        <div className = "">
                            <input 
                                type = "checkbox"
                                className = "w-5 h-5"
                                value = {checkbox}
                                onChange = {(e) => onHandleCheckBox(e)}
                            />
                            <p className = "relative text-lg font-ubuntu" style = {{bottom: "1.8rem", left: "1.8rem"}}>Accept with all license & conditions</p>
                        </div>
                    </div>

                    {/* sign up button */}
                    <div className = "relative left-[38%]">
                        <div className = "relative">
                            <button className = "w-32 h-12 bg-[#ebc94e] rounded-3xl text-white font-extrabold font-ubuntu" onClick = {handleSubmit}>Sign Up</button>
                        </div>
                    </div>

                    {/* direct to sign in */}
                    <div className = "mt-[1rem]">
                        <div className = "relative text-center">
                            <p className = "font-ubuntu text-xl">Already have an account? 
                                <Link to = "/login">
                                    <span className = "underline font-extrabold"> Sign in</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
    </form>
  )
}

export default Register
