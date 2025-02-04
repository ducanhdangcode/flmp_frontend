import React, { useEffect, useState } from 'react'
import LoginBackground from './backgroundLogin.jpg';
import FootballBackground from './footballBackground.jpg'
import './Login.css';
import WebFont from 'webfontloader';
import { FaUser } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { listUsers } from '../../../APIService/UserService.';
import { PiWarningOctagonFill } from 'react-icons/pi';
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../Context/UserContext';

const LoginContent = ({onHandleLoginStateSuccess, onHandleLoginStateFailed, setupRecentUsername, setupRecentPassword}) => {
  // placeholder for username and password
  const [usernamePlaceholder, setUsernamePlaceholder] = useState("Username");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");

  // username and password that user type in
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // manage vision of password
  const [isHidden, setIsHidden] = useState(true);

  // user list that being fetched
  const [userList, setUserList] = useState([]);

  // navigate 
  const navigate = useNavigate();

  // errors when login failed
  const loginErrorCode = "Your username or your password seem wrong!";
  const [loginError, setloginError] = useState("");

  // context of user
  const {setLoginUsername, setLoginFirstname, setLoginLastname, setLoginEmail} = useUserContext();

  // change vision of password
  const onChangeViewPassword = () => {
    isHidden ? setIsHidden(false) : setIsHidden(true);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Changa', 'Ubuntu', 'Space Grotesk'],
      }
    })
  }, [])

  useEffect(() => {
    getAllUsers();
  });

  // fetch all users
  const getAllUsers = () => {
   listUsers().then((response) => {
    setUserList(response.data);
   }).catch(err => console.log(err))
  }

  // check if user matched or not
  const checkUser = () => {
    for (let i = 0; i < userList.length; ++i) {
      if (username === userList[i].username && password === userList[i].password) {
        setLoginFirstname(userList[i].firstname);
        setLoginLastname(userList[i].lastname);
        setLoginEmail(userList[i].email);
        localStorage.setItem("login-firstname", userList[i].firstname);
        localStorage.setItem("login-lastname", userList[i].lastname);
        localStorage.setItem("login-email", userList[i].email);
        return true;
      }
    }
    return false;
  }


  const handleSubmit = () => {
    if (checkUser()) {
      // set state to logged in
      onHandleLoginStateSuccess();

      // set properties
      setLoginUsername(username);

      // redirect to home page
      setTimeout(() => {
        navigate("/");
      }, 1500);
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
      <div className = "w-full overflow-x-clip overflow-y-clip relative top-[5rem] h-[50rem]">
        {/* background image */}
        <img id = "blurImage" src = {LoginBackground} alt = "" className = "absolute top-[0rem] left-[0rem] h-[50rem] w-[100vw]" />

        <div className = "flex w-[70%] h-[36rem] bg-white relative top-[6.5rem] left-[15%] rounded-[8px]">
          {/* image beside login form */}
          <div className = "w-[60vw] h-[36rem] bg-white z-10 rounded-tl-[8px] rounded-bl-[8px]">
            <img src = {FootballBackground} alt = "" className = "w-full h-[36rem] rounded-tl-[8px] rounded-bl-[8px]" />
          </div>

          {/* login form */}
          <div className = "bg-[#FCF9F2] relative w-[40vw] h-[36rem] rounded-tr-[8px] rounded-br-[8px]">
            <p className = "text-center text-4xl font-bold text-[#052b33] mt-[3rem]">Login to <span className = "text-[#ebc94e]">FLMP</span></p>

            {/* username input */}
            <div>
              <input 
                  id = "login_input"
                  type = "text"
                  placeholder = {usernamePlaceholder}
                  className = {!loginError ? "w-[75%] h-11 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu text-[black] border-[2px] mt-[6rem] ml-[15%]" : "w-[75%] h-11 relative rounded-[15px] bg-white pl-2 font-ubuntu text-[black] border-[3px] mt-[6rem] ml-[15%] border-red-500"}
                  style = {{borderWidth: "2px", borderStyle: "inset"}}
                  onFocus = {onFocusUsername}
                  onBlur = {() => setUsernamePlaceholder("Username")}
                  onChange = {(e) => setUsername(e.target.value)}  
                  value = {username}    
              />
              <div>
                <FaUser className = "w-7 h-7 relative bottom-[2.4rem] ml-[1.5rem]" style = {{color: "black"}}/>
                {loginError && 
                  <PiWarningOctagonFill className = "w-7 h-7 relative float-right bottom-[4rem] right-[3rem]" style = {{color: "#f0323c"}}/>
                }
              </div>
            </div>

            {/* password input */}
            <div>
              <input 
                  id = "login_input"
                  type = {isHidden ? "password" : "text"}
                  placeholder = {passwordPlaceholder}
                  className = {!loginError ? "w-[75%] h-11 relative rounded-[15px] bg-white pl-2 font-ubuntu border-orange-200 mt-[0rem] ml-[15%]" : "w-[75%] h-11 relative rounded-[15px] bg-white pl-2 font-ubuntu mt-[0rem] ml-[15%] border-red-500"}
                  style = {{borderWidth: "2px", borderStyle: "inset"}}
                  onFocus = {onFocusPassword}
                  onBlur = {() => setPasswordPlaceholder("Password")}
                  onChange = {(e) => setPassword(e.target.value)}
                  value = {password}
              />
              <span className = "relative bottom-[2.3rem] left-[1.5rem]">
                <FaLock className = "w-7 h-7" />
              </span>
              <span>
                {!loginError ? 
                  (isHidden ? 
                    <FaEye className = "w-7 h-7 relative hover:cursor-pointer float-right bottom-[4rem] right-[3.5rem]" style = {{color: "black"}}onClick = {onChangeViewPassword}/> : 
                    <FaEyeSlash className = "w-7 h-7 relative hover:cursor-pointer float-right bottom-[4rem] right-[3.5rem]" style = {{color: "black"}} onClick = {onChangeViewPassword}/>
                  ) : 
                  <PiWarningOctagonFill className = "w-7 h-7 relative float-right bottom-[4rem] right-[3rem]" style = {{color: "#f0323c"}}/>
                }
              </span>
            </div>

            {/* forgot password */}
            <p className = "text-center relative text-lg float-right bottom-[0.5rem] mr-[1.5rem]">Forgot password?</p>

            {/* login button */}
            <button className = "bg-[#ebc94e] w-[30%] h-12 relative rounded-[10px] text-[white] text-2xl font-bold ml-[35%] mt-[1rem]" onClick = {handleSubmit}>Login</button>

            {/* errors */}
            {loginError && 
              <p className = "font-ubuntu text-lg relative font-bold text-red-600 ml-[2rem] mt-[1.5rem]">{loginError}</p>
            }

            {/* register suggestion */}
            <p className = "text-center relative text-xl mt-[1rem]">Doesn't have an account?
              <Link to = "/register">
                <span className = "underline font-bold"> Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LoginContent
