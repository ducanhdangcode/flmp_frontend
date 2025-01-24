import React, { useEffect, useState } from 'react'
import RegisterBackground from './backgroundLogin.jpg';
import { Link, useNavigate } from 'react-router-dom';
import RegisterBoxBackground from './backgroundRegisterBox.jpg';
import WebFont from 'webfontloader';
import './Register.css';
import { createUser } from '../../../APIService/UserService.';
import { PiWarningOctagonFill } from 'react-icons/pi';

const Register = () => {
    // placeholder 
    const [lastnamePlaceholder, setLastnamePlaceholder] = useState("Type your lastname");
    const [firstnamePlaceholder, setFirstnamePlaceholder] = useState("Type your firstname");
    const [usernamePlaceholder, setUsernamePlaceholder] = useState("Type your username");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Type your password");
    const [rePasswordPlaceholder, setRePasswordPlaceholder] = useState("Re-type your password");
    const [emailPlaceholder, setEmailPlaceholder] = useState("Type your e-mail");

    // error code
    const usernameErrorCode = "Username's length must be at least 5 characters.";
    const passwordErrorCode = "Password's length must be at least 12 characters, it must contains at least 1 uppercase character(A-Z), 1 number(0-9) and 1 special character(@,!,#,$,...)."
    const emailErrorCode = "Invalid e-mail format, it must end with '@gmail.com'.";
    const firstnameErrorCode = "Firstname cannot be empty.";
    const lastnameErrorCode = "Lastname cannot be empty.";
    const rePasswordErrorCode = "Your password does not match.";
    const checkboxErrorCode = "You must accept with license and conditions to complete signing up."

    // infor management
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    // error management
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [rePasswordError, setRePasswordError] = useState("");
    const [checkboxError, setCheckboxError] = useState("");

    const navigate = useNavigate();

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

    // reset when focus
    const onFocusUsername = () => {
        setUsernamePlaceholder("");
        setUsernameError("");
    }

    const onFocusPassword = () => {
        setPasswordPlaceholder("");
        setPasswordError("");
    }

    const onFocusEmail = () => {
        setEmailPlaceholder("");
        setEmailError("");
    }

    const onFocusFirstname = () => {
        setFirstnamePlaceholder("");
        setFirstnameError("");
    }

    const onFocusLastname = () => {
        setLastnamePlaceholder("");
        setLastnameError("");
    }

    const onFocusRePassword = () => {
        setRePasswordPlaceholder("");
        setRePasswordError("");
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
        setCheckboxError("");
    }

    // submit
    const handleSubmit = () => {
        if (username.length < 5) {
            setUsernameError(usernameErrorCode);
            setUsername("");
        }

        if (!CheckPassword()) {
            setPasswordError(passwordErrorCode);
            setPassword("");
        }

        if (!checkEmail()) {
            setEmailError(emailErrorCode);
            setEmail("");
        }

        if (!firstname) {
            setFirstnameError(firstnameErrorCode);
            setFirstname("");
        }

        if (!lastname) {
            setLastnameError(lastnameErrorCode);
            setLastname("");
        }

        if (rePassword !== password) {
            setRePasswordError(rePasswordErrorCode);
            setRePassword("");
        }

        if (!checkbox) {
            setCheckboxError(checkboxErrorCode);
        } else {
            setCheckboxError("");
        }

        let newUser = {username, password, email, firstname, lastname};
        createUser(newUser).then((response) => {
            console.log(response.data);
            navigate("/");
        }).catch(err => console.log(err));
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
            <div className = "flex h-[75rem] w-[70%] bg-white relative top-[10rem] left-[15%] rounded-[8px]">
                {/* image beside the register box */}
                <div className = "w-[50%] h-full rounded-tl-[8px] rounded-bl-[8px]">
                    <img src = {RegisterBoxBackground} alt = "" className = "w-full h-full rounded-tl-[8px] rounded-bl-[8px]"/>
                </div>

                {/* register form */}
                <div className = "w-[50%] rounded-tr-[8px] rounded-br-[8px]">
                    {/* title */}
                    <p className = "text-center text-4xl font-bold text-[#052b33] mt-[2rem]">Register to <span className = "text-[#ebc94e]">FLMP</span></p>

                    {/* firstname and lastname */}
                    <div className = "flex">
                        {/* lastname */}
                        <div className = "">
                            <div className = "">
                                <p className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "1rem", top: "1.5rem"}}>Lastname</p>
                                <input 
                                    type = "text"
                                    placeholder = {lastnamePlaceholder}
                                    className = {!lastnameError ? "h-9 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu left-[1rem] top-[2rem] w-[80%]" : "h-9 relative rounded-[15px] bg-white pl-2 font-ubuntu border-2 border-red-600 left-[1rem] top-[2rem] w-[80%]"}
                                    style = {{borderWidth: "1px", borderStyle: "inset"}}
                                    onFocus = {onFocusLastname}
                                    onBlur = {() => setLastnamePlaceholder("Type your lastname")}
                                    value = {lastname}
                                    onChange = {onHandleChangeLastname}
                                />
                                {lastnameError && <PiWarningOctagonFill className = "relative w-7 h-7 float-right" style = {{top: "2.3rem", right: "2.5rem", color: "#f0323c"}}/>}
                            </div>
                            <p className = "relative text-sm text-red-600 font-bold font-ubuntu" style = {{top: "2rem", left: "1rem"}}>{lastnameError}</p>
                        </div>

                        {/* firstname */}
                        <div className = "">
                            <div>
                                <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "0rem", top: "1.5rem"}}>Firstname</label>
                                <input 
                                    type = "text"
                                    placeholder = {firstnamePlaceholder}
                                    className = {!lastnameError ? "h-9 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu left-[0rem] top-[2rem]" : "h-9 relative rounded-[15px] bg-white pl-2 font-ubuntu border-2 border-red-600 left-[0rem] top-[2rem]"}
                                    style = {{borderWidth: "1px", borderStyle: "inset"}}
                                    onFocus = {onFocusFirstname}
                                    onBlur = {() => setFirstnamePlaceholder("Type your firstname")}
                                    value = {firstname}
                                    onChange = {onHandleChangeFirstname}
                                />
                                {firstnameError && <PiWarningOctagonFill className = "relative w-7 h-7 float-right" style = {{top: "2.3rem", right: "3.1rem", color: "#f0323c"}}/>}
                            </div>
                            <p className = "relative text-sm text-red-600 font-bold font-ubuntu top-[2rem]">{firstnameError}</p>
                        </div>
                    </div>

                    {/* username */}
                    <div className = "relative top-[3rem]">
                        <div>
                            <p className = "font-ubuntu text-lg font-white float-left relative text-black font-bold left-[1rem]">Username</p>
                            <input 
                                type = "text"
                                placeholder = {usernamePlaceholder}
                                className = {!usernameError ? "h-9 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu top-[0.5rem] w-[90%] left-[1rem]" : "h-9 relative rounded-[15px] bg-white pl-2 font-ubuntu border-2 border-red-600 top-[0.5rem] w-[90%] left-[1rem]"}
                                style = {{borderWidth: "1px", borderStyle: "inset"}}
                                onFocus = {onFocusUsername}
                                onBlur = {() => setUsernamePlaceholder("Type your username")}
                                value = {username}
                                onChange = {onHandleChangeUsername}
                            />
                            {usernameError && <PiWarningOctagonFill className = "relative w-7 h-7 float-right" style = {{top: "0.8rem", right: "2.6rem", color: "#f0323c"}}/>}
                        </div>
                        <p className = "relative text-sm text-red-600 font-bold font-ubuntu top-[1rem] left-[1rem]">{usernameError}</p>
                    </div>

                    {/* email */}
                    <div className = "relative top-[5rem]">
                        <div className = "">
                            <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold left-[1rem]">E-mail</label>
                            <input 
                                type = "text"
                                placeholder = {emailPlaceholder}
                                className = {!emailError ? "h-9 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu w-[90%] top-[2rem] left-[-2.2rem]": "h-9 relative rounded-[15px] bg-white pl-2 font-ubuntu border-2 border-red-600 w-[90%] top-[2rem] left-[-2.2rem]"}
                                style = {{borderWidth: "1px", borderStyle: "inset"}}
                                onFocus = {onFocusEmail}
                                onBlur = {() => setEmailPlaceholder("Type your e-mail")}
                                value = {email}
                                onChange = {onHandleChangeEmail}
                            />
                            {emailError && <PiWarningOctagonFill className = "relative w-7 h-7 float-right" style = {{top: "0rem", right: "2.7rem", color: "#f0323c"}}/>}
                        </div>
                        <p className = "relative text-sm text-red-600 font-bold font-ubuntu left-[1rem] top-[2rem]">{emailError}</p>
                    </div>

                    {/* password */}
                    <div>
                        <div className = "relative top-[8rem]">
                            <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "1rem"}}>Password</label>
                            <input 
                                type = "text"
                                placeholder = {passwordPlaceholder}
                                className = {!passwordError ? "h-9 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu w-[90%] left-[1rem] top-[0.5rem]" : "h-9 relative rounded-[15px] bg-white pl-2 font-ubuntu border-2 border-red-600 w-[90%] left-[1rem] top-[0.5rem]"}
                                style = {{borderWidth: "1px"}}
                                onFocus = {onFocusPassword}
                                onBlur = {() => setPasswordPlaceholder("Type your password")}
                                onChange = {onHandleChangePassword}
                                value = {password}
                            />
                            {passwordError && <PiWarningOctagonFill className = "relative w-7 h-7 float-right" style = {{top: "0.7rem", right: "2.7rem", color: "#f0323c"}}/>}
                        </div>
                        <p className = "relative text-sm text-red-600 font-bold font-ubuntu top-[8.5rem] left-[1rem]">{passwordError}</p>
                    </div>

                    {/* re-type password */}
                    <div className = "relative top-[9.5rem]">
                        <div className = "">
                            <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "1rem"}}>Re-type password</label>
                            <input 
                                type = "text"
                                placeholder = {rePasswordPlaceholder}
                                className = {!rePasswordError ? "h-9 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu w-[90%] top-[0.5rem] left-[1rem]" : "h-9 relative rounded-[15px] bg-white pl-2 font-ubuntu border-2 border-red-600 w-[90%] top-[0.5rem] left-[1rem]"}
                                style = {{borderWidth: "1px", borderStyle: "inset"}}
                                onFocus = {onFocusRePassword}
                                onBlur = {() => setRePasswordPlaceholder("Re-type your password")}
                                value = {rePassword}
                                onChange = {onHandleChangeRePassword}
                            />
                            {rePasswordError && <PiWarningOctagonFill className = "relative w-7 h-7 float-right" style = {{top: "0.7rem", right: "2.7rem", color: "#f0323c"}}/>}
                        </div>
                        <p className = "relative text-sm text-red-600 font-bold font-ubuntu top-[0.5rem] left-[1rem]">{passwordError}</p>
                    </div>

                    {/* checkbox */}
                    <div className = "relative left-4 mt-[11rem]">
                        <div className = "">
                            <input 
                                type = "checkbox"
                                className = "w-5 h-5"
                                value = {checkbox}
                                onChange = {(e) => onHandleCheckBox(e)}
                            />
                            <p className = "relative text-lg font-ubuntu" style = {{bottom: "1.8rem", left: "1.8rem"}}>Accept with all license & conditions</p>
                        </div>
                        <p className = "relative text-sm text-red-600 font-bold font-ubuntu top-[-1.5rem]">{checkboxError}</p>
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
    </form>
  )
}

export default Register
