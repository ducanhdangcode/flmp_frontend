import React, { useEffect, useState } from 'react'
import LoginBackground from './backgroundLogin.jpg';
import FootballBackground from './footballBackground.jpg'
import './Login.css';
import WebFont from 'webfontloader';
import { FaUser } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { getUserByUsername, listUsers, updateUser, userLogin } from '../../../APIService/UserService.';
import { PiWarningOctagonFill } from 'react-icons/pi';
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../Context/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import { useSpinnerContext } from '../../../Context/SpinnerContext';

const LoginContent = ({onHandleLoginStateSuccess}) => {
  // placeholder for username and password
  const [usernamePlaceholder, setUsernamePlaceholder] = useState("Username");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");

  // username and password that user type in
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // manage vision of password
  const [isHidden, setIsHidden] = useState(true);

  // navigate 
  const navigate = useNavigate();

  // context of user
  const {setLoginUsername, setLoginFirstname, setLoginLastname, setLoginEmail} = useUserContext();

  // user token
  const {setUserToken, setAvatar} = useUserContext();

  // spinner
  const {displaySpinner, setDisplaySpinner} = useSpinnerContext();

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

  const handleSetAvatar = (username) => {
    getUserByUsername(username).then((response) => {
      setAvatar(response.data?.avatar);
      localStorage.setItem("login-user-avatar", response.data?.avatar);
    })
  } 

  const updateUserInfo = (username) => {
    getUserByUsername(username).then((response) => {
      setLoginEmail(response.data.email);
      setLoginFirstname(response.data.firstname);
      setLoginLastname(response.data.lastname);
    }).catch(err => console.error(err));
  }

  const handleLogin = async () => {
    try {
      const response = await userLogin(username, password);
      console.log("Login user: ", response.data);

      // update user info for utilities
      setLoginUsername(username);
      updateUserInfo();

      // token
      setUserToken(response.data.token);
      localStorage.setItem("user-token", response.data.token);

      // set state -> login success
      onHandleLoginStateSuccess();

      // display toast
      toast("Login successfully!", {
        position: "top-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "bg-green-500 text-white font-bold p-4 rounded-lg shadow-lg",
            progressClassName: "bg-white",
      })

      // wait 1s to display spinner
      setTimeout(() => {
        setDisplaySpinner(true);
      }, 1000);

      // wait 1.5s to navigate to home page
      setTimeout(() => {
        handleSetAvatar(username, response.data.token);
        navigate("/");
        setDisplaySpinner(false);
      }, 1500);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      }
      //display error toast
      toast("Wrong username or password!", {
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-red-500 text-white font-bold p-4 rounded-lg shadow-lg",
        progressClassName: "bg-white",
      })
      setUsername("");
      setPassword("");
    }
  }

  const onFocusUsername = () => {
    setUsernamePlaceholder("");
  }

  const onFocusPassword = () => {
    setPasswordPlaceholder("");
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
                  className = "w-[75%] h-11 relative rounded-[15px] border-orange-200 bg-white pl-2 font-ubuntu text-[black] border-[2px] mt-[6rem] ml-[15%]" 
                  style = {{borderWidth: "2px", borderStyle: "inset"}}
                  onFocus = {onFocusUsername}
                  onBlur = {() => setUsernamePlaceholder("Username")}
                  onChange = {(e) => setUsername(e.target.value)}  
                  value = {username}    
              />
              <div>
                <FaUser className = "w-7 h-7 relative bottom-[2.4rem] ml-[1.5rem]" style = {{color: "black"}}/>
              </div>
            </div>

            {/* password input */}
            <div>
              <input 
                  id = "login_input"
                  type = {isHidden ? "password" : "text"}
                  placeholder = {passwordPlaceholder}
                  className = "w-[75%] h-11 relative rounded-[15px] bg-white pl-2 font-ubuntu border-orange-200 mt-[0rem] ml-[15%]"
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
                {(isHidden ? 
                    <FaEye className = "w-7 h-7 relative hover:cursor-pointer float-right bottom-[4rem] right-[3.5rem]" style = {{color: "black"}}onClick = {onChangeViewPassword}/> : 
                    <FaEyeSlash className = "w-7 h-7 relative hover:cursor-pointer float-right bottom-[4rem] right-[3.5rem]" style = {{color: "black"}} onClick = {onChangeViewPassword}/>
                  )}
              </span>
            </div>

            {/* forgot password */}
            <p className = "text-center relative text-lg float-right bottom-[0.5rem] mr-[1.5rem]">Forgot password?</p>

            {/* login button */}
            <button className = "bg-[#ebc94e] w-[30%] h-12 relative rounded-[10px] text-[white] text-2xl font-bold ml-[35%] mt-[1rem]" onClick = {handleLogin}>Login</button>

            {/* register suggestion */}
            <p className = "text-center relative text-xl mt-[1rem]">Doesn't have an account?
              <Link to = "/register">
                <span className = "underline font-bold"> Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </form>
  )
}

export default LoginContent
