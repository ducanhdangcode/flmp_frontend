import React, { useEffect, useState } from 'react'
import DarkBackground from './dark-background-login.jpg';
import LogoAppLight from './logo-no-background.png';
import { Link, useNavigate } from 'react-router-dom';
import { PiWarningOctagonFill } from 'react-icons/pi';
import WebFont from 'webfontloader';
import './Register.css';
import { createUser } from '../../../APIService/UserService.';

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
        <div className = "w-full overflow-x-clip overflow-y-clip" style = {{height: "80rem", backgroundImage: `url(${DarkBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 80rem"}}>
            <img src = {LogoAppLight} alt = "Logo App" className = "h-44 opacity-100 relative" style = {{left: "8rem", top: "29.5rem"}}/>
            <div className = "backdrop-blur-lg bg-white/30 float-right relative rounded-xl" style = {{width: "42rem", height: "68rem", right: "6rem", bottom: "4rem"}}>
                <p className = "text-center text-5xl relative top-4 right-1 font-bold font-changa text-white">Register</p>

                <div>
                    <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "1rem", top: "1.5rem"}}>Lastname</label>
                    <input 
                        type = "text"
                        placeholder = {lastnamePlaceholder}
                        className = {!lastnameError ? "h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu" : "h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu border-2 border-red-600"}
                        style = {{left: "0.5rem", top: "1.8rem", borderWidth: "1px", width: "40rem"}}
                        onFocus = {onFocusLastname}
                        onBlur = {() => setLastnamePlaceholder("Type your lastname")}
                        value = {lastname}
                        onChange = {onHandleChangeLastname}
                    />
                    {lastnameError && <PiWarningOctagonFill className = "relative w-7 h-7 float-right" style = {{top: "2.3rem", right: "2rem", color: "#f0323c"}}/>}
                </div>
                <p className = "relative text-lg text-red-600 font-bold font-ubuntu" style = {{top: "2rem", left: "1rem"}}>{lastnameError}</p>

                <div>
                    <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "1rem", top: "3rem"}}>Firstname</label>
                    <input 
                        type = "text"
                        placeholder = {firstnamePlaceholder}
                        className = {!lastnameError ? "h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu" : "h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu border-2 border-red-600"}
                        style = {{left: "0.5rem", top: "3.3rem", borderWidth: "1px", width: "40rem"}}
                        onFocus = {onFocusFirstname}
                        onBlur = {() => setFirstnamePlaceholder("Type your firstname")}
                        value = {firstname}
                        onChange = {onHandleChangeFirstname}
                    />
                    {firstnameError && <PiWarningOctagonFill className = "relative w-7 h-7 float-right" style = {{top: "3.8rem", right: "2rem", color: "#f0323c"}}/>}
                </div>
                <p className = "relative text-lg text-red-600 font-bold font-ubuntu" style = {{top: "3.5rem", left: "1rem"}}>{firstnameError}</p>

                <div>
                    <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "1rem", top: "4.5rem"}}>Username</label>
                    <input 
                        type = "text"
                        placeholder = {usernamePlaceholder}
                        className = {!usernameError ? "h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu" : "h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu border-2 border-red-600"}
                        style = {{left: "0.5rem", top: "5rem", borderWidth: "1px", width: "40rem"}}
                        onFocus = {onFocusUsername}
                        onBlur = {() => setUsernamePlaceholder("Type your username")}
                        value = {username}
                        onChange = {onHandleChangeUsername}
                    />
                    {usernameError && <PiWarningOctagonFill className = "relative w-7 h-7 float-right" style = {{top: "5.5rem", right: "2rem", color: "#f0323c"}}/>}
                </div>
                <p className = "relative text-lg text-red-600 font-bold font-ubuntu" style = {{top: "5.2rem", left: "1rem"}}>{usernameError}</p>

                <div className = "mt-2">
                    <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "1rem", top: "5.5rem"}}>E-mail</label>
                    <input 
                        type = "text"
                        placeholder = {emailPlaceholder}
                        className = {!emailError ? "h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu" : "h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu border-2 border-red-600"}
                        style = {{left: "0.5rem", top: "5.8rem", borderWidth: "1px", width: "40rem"}}
                        onFocus = {onFocusEmail}
                        onBlur = {() => setEmailPlaceholder("Type your e-mail")}
                        value = {email}
                        onChange = {onHandleChangeEmail}
                    />
                    {emailError && <PiWarningOctagonFill className = "relative w-7 h-7 float-right" style = {{top: "6.3rem", right: "2rem", color: "#f0323c"}}/>}
                </div>
                <p className = "relative text-lg text-red-600 font-bold font-ubuntu" style = {{top: "6rem", left: "1rem"}}>{emailError}</p>

                <div className = "mt-6">
                    <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "1rem", top: "5.3rem"}}>Password</label>
                    <input 
                        type = "text"
                        placeholder = {passwordPlaceholder}
                        className = {!passwordError ? "h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu" : "h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu border-2 border-red-600"}
                        style = {{left: "0.5rem", top: "5.6rem", borderWidth: "1px", width: "40rem"}}
                        onFocus = {onFocusPassword}
                        onBlur = {() => setPasswordPlaceholder("Type your password")}
                        onChange = {onHandleChangePassword}
                        value = {password}
                    />
                    {passwordError && <PiWarningOctagonFill className = "relative w-7 h-7 float-right" style = {{top: "6.1rem", right: "2rem", color: "#f0323c"}}/>}
                </div>
                <p className = "relative text-lg text-red-600 font-bold font-ubuntu" style = {{top: "5.9rem", left: "1rem"}}>{passwordError}</p>

                <div className = "mt-6">
                    <label className = "font-ubuntu text-lg font-white float-left relative text-black font-bold" style = {{left: "1rem", top: "5.3rem"}}>Password</label>
                    <input 
                        type = "text"
                        placeholder = {rePasswordPlaceholder}
                        className = {!rePasswordError ? "h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu" : "h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu border-2 border-red-600"}
                        style = {{left: "0.5rem", top: "5.6rem", borderWidth: "1px", width: "40rem"}}
                        onFocus = {onFocusRePassword}
                        onBlur = {() => setRePasswordPlaceholder("Re-type your password")}
                        value = {rePassword}
                        onChange = {onHandleChangeRePassword}
                    />
                    {rePasswordError && <PiWarningOctagonFill className = "relative w-7 h-7 float-right" style = {{top: "6.1rem", right: "2rem", color: "#f0323c"}}/>}
                </div>
                <p className = "relative text-lg text-red-600 font-bold font-ubuntu" style = {{top: "5.9rem", left: "1rem"}}>{rePasswordError}</p>

                <div className = "relative top-28 left-4">
                    <input 
                        type = "checkbox"
                        className = "w-5 h-5"
                        value = {checkbox}
                        onChange = {(e) => onHandleCheckBox(e)}
                    />
                    <p className = "relative text-lg font-ubuntu text-white" style = {{bottom: "1.8rem", left: "1.8rem"}}>Accept with all license & conditions</p>
                </div>
                <p className = "relative text-lg text-red-600 font-bold font-ubuntu" style = {{top: "5.1rem", left: "1rem"}}>{checkboxError}</p>

                <div className = "relative" style = {{left: "17rem", top: "7rem"}}>
                    <button className = "w-32 h-12 bg-gradient-to-r from-blue-600 to-purple-600 to-pink-400 rounded-3xl text-white font-extrabold font-ubuntu" onClick = {handleSubmit}>Sign Up</button>
                </div>

                <div className = "relative text-center" style = {{top: "8.5rem"}}>
                    <p className = "font-ubuntu text-white text-xl">Already have an account? 
                        <Link to = "/login">
                            <span className = "underline font-extrabold"> Sign in</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </form>
  )
}

export default Register
