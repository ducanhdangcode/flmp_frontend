import React, { useEffect, useState } from 'react'
import DarkBackground from './dark-background-login.jpg';
import LogoAppLight from './logo-no-background.png';
import './Login.css';
import WebFont from 'webfontloader';
import { FaUser } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { listUsers } from '../../../APIService/UserService.';
import { PiWarningOctagonFill } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const LoginContent = ({colorTheme, lightColor, darkColor, loginState, onHandleLoginStateSuccess, onHandleLoginStateFailed, setupRecentUsername, setupRecentPassword, setupRecentFirstname, setupRecentLastname, setupRecentEmail, setupRecentAvatar, setupRecentId, setupFavoriteTeams}) => {
  const [usernamePlaceholder, setUsernamePlaceholder] = useState("Username");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [userList, setUserList] = useState([]);

  const navigate = useNavigate();

  const loginErrorCode = "Your username or your password seem wrong!";
  const loginSuccessCode = "Login successfully! Redirecting to home page...";
  const [loginError, setloginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const [activeFirstname, setActiveFirstname] = useState("");

  const onChangeViewPassword = () => {
    isHidden ? setIsHidden(false) : setIsHidden(true);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Changa', 'Ubuntu'],
      }
    })
  }, [])

  useEffect(() => {
    getAllUsers();
  });

  const getAllUsers = () => {
   listUsers().then((response) => {
    setUserList(response.data);
   }).catch(err => console.log(err))

   for (let i = 0; i < userList.length; ++i) {
    if (username === userList[i].username && password === userList[i].password) {
      setupRecentFirstname(userList[i].firstname);
      setupRecentLastname(userList[i].lastname);
      setupRecentEmail(userList[i].email);
      setupRecentAvatar(userList[i].avatar);
      setupRecentId(userList[i].id);
      setupFavoriteTeams(userList[i]?.favoriteTeams);
    }
  }
  }

  const checkUser = () => {
    for (let i = 0; i < userList.length; ++i) {
      if (username === userList[i].username && password === userList[i].password) {
        return true;
      }
    }
    return false;
  }


  const handleSubmit = () => {
    if (checkUser()) {
      onHandleLoginStateSuccess();
      setupRecentUsername(username);
      setupRecentPassword(password);
      setTimeout(() => {
        navigate("/");
      }, 1500);
      setLoginSuccess(loginSuccessCode);
    } else {
      setloginError(loginErrorCode);
      setUsername("");
      setPassword("");
      onHandleLoginStateFailed();
    }
  }

  const onFocusUsername = () => {
    setUsernamePlaceholder("");
    setloginError("");
  }

  const onFocusPassword = () => {
    setPasswordPlaceholder("");
    setloginError("");
  }

  return (
    <form onSubmit = {(e) => e.preventDefault()}>
      <div className = "w-full overflow-x-clip overflow-y-clip" style = {{height: "50rem", backgroundImage: `url(${DarkBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 50rem"}}>
        <img src = {LogoAppLight} alt = "Logo App" className = "h-44 opacity-100 relative" style = {{left: "8rem", top: "20rem"}}/>
        <div className = "backdrop-blur-lg bg-white/30 float-right relative rounded-xl" style = {{width: "25rem", height: "36rem", right: "12rem", bottom: "4rem"}}>
          <p className = "text-center text-5xl relative top-4 right-1 font-bold font-changa text-white">Login</p>
          <div>
            <input 
                type = "text"
                placeholder = {usernamePlaceholder}
                className = {!loginError ? "w-80 h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu" : "w-80 h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu border-2 border-red-600"}
                style = {{left: "2.4rem", top: "7rem", borderWidth: "1px"}}
                onFocus = {onFocusUsername}
                onBlur = {() => setUsernamePlaceholder("Username")}
                onChange = {(e) => setUsername(e.target.value)}  
                value = {username}    
            />
            <span>
              {!loginError ? <FaUser className = "w-7 h-7 relative float-right" style = {{top: "7.4rem", right: "3.3rem", color: "white"}}/> : <PiWarningOctagonFill className = "w-7 h-7 relative float-right" style = {{top: "7.4rem", right: "3.3rem", color: "#f0323c"}}/>}
            </span>
          </div>
          <div>
            <input 
                type = {isHidden ? "password" : "text"}
                placeholder = {passwordPlaceholder}
                className = {!loginError ? "w-80 h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu" : "w-80 h-11 relative rounded-3xl bg-transparent pl-2 font-ubuntu border-2 border-red-600"}
                style = {{left: "2.4rem", top: "9rem", borderWidth: "1px"}}
                onFocus = {onFocusPassword}
                onBlur = {() => setPasswordPlaceholder("Password")}
                onChange = {(e) => setPassword(e.target.value)}
                value = {password}
            />
            <span>
              {!loginError ? (isHidden ? <FaEye className = "w-7 h-7 relative float-right hover:cursor-pointer" style = {{top: "9.4rem", right: "3.3rem", color: "white"}}onClick = {onChangeViewPassword}/> : <FaEyeSlash className = "w-7 h-7 relative float-right hover:cursor-pointer" style = {{top: "9.4rem", right: "3.3rem", color: "white"}} onClick = {onChangeViewPassword}/>) : <PiWarningOctagonFill className = "w-7 h-7 relative float-right" style = {{top: "9.5rem", right: "3.3rem", color: "#f0323c"}}/>}
            </span>
          </div>
          <p className = "text-center relative text-lg text-white font-ubuntu" style = {{top: "10rem", left: "5rem"}}>Forgot password?</p>
          <button className = "bg-gradient-to-r from-blue-600 to-purple-600 to-pink-400 w-32 h-12 relative rounded-3xl text-white text-2xl font-extrabold font-ubuntu" style = {{left: "8.5rem", top: "12rem"}} onClick = {handleSubmit}>Login</button>
          {loginError && <p className = "font-ubuntu text-lg relative font-bold text-red-600" style = {{top: "12.5rem", left: "0.9rem"}}>{loginError}</p>}
          {loginSuccess && <p className = "font-ubuntu text-lg relative font-bold text-green-600" style = {{top: "12.5rem", left: "0.9rem"}}>{loginSuccess}</p>}
          <p className = "text-center relative text-xl font-ubuntu text-white" style = {{top: "13rem"}}>Doesn't have an account?
            <Link to = "/register">
              <span className = "underline font-bold"> Register</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  )
}

export default LoginContent
