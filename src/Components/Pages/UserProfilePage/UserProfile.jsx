import React, { useEffect, useRef, useState } from 'react'
import WebFont from 'webfontloader';
import { getUserByUsername, listUsers, updateAvatar, updateEmail, updateFirstname, updateLastname, updateUsername } from '../../../APIService/UserService.';
import CropUserImage from '../CropImage/CropUserImage/CropUserImage';
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import UserFavorite from './UserFavorite';
import { useThemeContext } from '../../../Context/ThemeContext';
import { useUserContext } from '../../../Context/UserContext';

const UserProfile = ({recentAvatar, setupRecentAvatar}) => {
    // contex for theme
    const {theme, lightColor, darkColor, setTheme} = useThemeContext();

    // navigate
    const navigate = useNavigate();

    // user list when get axios
    const [userList, setUserList] = useState([]);

    // image appear on crop
    const [image, setImage] = useState(null);

    // ref
    const fileInput = useRef(null);

    // check if pop up the crop window
    const [newWindow, setNewWindow] = useState("");

    // check if edit
    const [editUsername, setEditUsername] = useState(false);
    const [editFirstname, setEditFirstname] = useState(false);
    const [editLastname, setEditLastname] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editAvatar, setEditAvatar] = useState(false);
    const [displayEditNoti, setDisplayEditNoti] = useState(false);
    const [displayEditProgress, setDisplayEditProgress] = useState(false);

    // error code
    const usernameDuplicateErrorCode = "Username has already taken.";
    const usernameEmptyErrorCode = "Username cannot be empty.";
    const emailInvalidErrorCode = "Invalid e-mail format.";

    // error
    const [usernameDuplicateError, setUsernameDuplicateError] = useState("");
    const [usernameEmptyError, setUsernameEmptyError] = useState("");
    const [emailInvalidError, setEmailInvalidError] = useState("");

    // context of user
    const {loginUsername, loginFirstname, loginLastname, loginEmail, setLoginUsername, setLoginFirstname, setLoginLastname, setLoginEmail} = useUserContext();

    // input
    const [username, setUsername] = useState(loginUsername);
    const [recentUser, setRecentUser] = useState(null);
    const [firstname, setFirstname] = useState(loginFirstname);
    const [lastname, setLastname] = useState(loginLastname);
    const [email, setEmail] = useState(loginEmail);

    const {avatar, setAvatar} = useUserContext();

    const [currentAvatar, setCurrentAvatar] = useState(avatar);

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto Condensed', 'Ubuntu']
            }
        })
    }, []);

    useEffect(() => {
        localStorage.setItem('avatar', recentAvatar);
    });

    useEffect(() => {
        getUserByUsername(loginUsername).then((response => {
            setRecentUser(response.data);
            setAvatar(response.data?.avatar);
        }))
    }, [])

    const checkDuplicateUser = (usernameTarget) => {
        listUsers().then((response) => {
            setUserList(response.data);
        })
        if (editUsername === true) {
            for (let i = 0; i < userList.length; ++i) {
                if (usernameTarget === userList[i].username) {
                    return true;
                }
            }
        }
        return false;
    }

    // check if user enter username
    const checkEmptyUsername = (username) => {
        return username.length === 0;
    }

    // check format of email
    const checkValidEmail = (email) => {
        return email.substr(email.length - 10) === "@gmail.com";
    }

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    const onClickInputChange = () => {
        fileInput.current.click();
        newWindow ? setNewWindow("") : setNewWindow("created");
    }

    const onCropDone = (imgCroppedArea) => {
        const canvasElement = document.createElement("canvas");
        canvasElement.width = imgCroppedArea.width;
        canvasElement.height = imgCroppedArea.height;

        const context = canvasElement.getContext("2d");

        let imageObj1 = new Image();
        imageObj1.src = image;
        imageObj1.onload = () => {
            context.drawImage(
                imageObj1,
                imgCroppedArea.x, 
                imgCroppedArea.y,
                imgCroppedArea.width,
                imgCroppedArea.height, 
                0, 
                0, 
                imgCroppedArea.width, 
                imgCroppedArea.height
            );
            const dataURL = canvasElement.toDataURL("image/jpeg");
            setCurrentAvatar(JSON.stringify(dataURL));
            localStorage.setItem('login-user-avatar', JSON.stringify(dataURL));
        }
        setNewWindow(false);
        setEditAvatar(true);
        console.log("avatar: ", avatar);
    }

    const onCropCancel = () => {
        setNewWindow(false);
        setImage("");
    }

    const onHandleDisable = () => {
        setNewWindow("");
        setEditUsername(false);
        setEditFirstname(false);
        setEditLastname(false);
        setEditEmail(false);
    }

    const onSubmitEdit = (e) => {
        if (!checkDuplicateUser(username) && !checkEmptyUsername(username) && checkValidEmail(email)) {
            e.preventDefault();

            // update
            if (firstname !== loginFirstname) {
                updateFirstname(loginUsername, firstname);
                setLoginFirstname(firstname);
                localStorage.setItem("login-firstname", firstname);
            }
            if (lastname !== loginLastname) {
                updateLastname(loginUsername, lastname);
                setLoginLastname(lastname);
                localStorage.setItem("login-lastname", lastname);
            }
            if (email !== loginEmail) {
                updateEmail(loginUsername, email);
                setLoginEmail(email);
                localStorage.setItem("login-email", email);
            }
            if (username !== loginUsername) {
                updateUsername(loginUsername, username);
                setLoginUsername(username);
                localStorage.setItem("login-username", username);
            }
            if (currentAvatar !== avatar) {
                updateAvatar(recentUser?.id, currentAvatar);
                setAvatar(currentAvatar);
                localStorage.setItem("login-user-avatar", currentAvatar);
            }

            // reset
            setEditUsername(false);
            setEditFirstname(false);
            setEditLastname(false);
            setEditEmail(false);
            setAvatar(localStorage.getItem("login-user-avatar"));
            
            setDisplayEditProgress(true);
            setTimeout(() => {
                setDisplayEditProgress(false);
                setDisplayEditNoti(true);
                setTimeout(() => {
                    setDisplayEditNoti(false);
                }, 1500);
            }, 1500);
        } 

        if (checkDuplicateUser(username)) {
            setUsernameDuplicateError(true);
            setTimeout(() => {
                setUsernameDuplicateError(false);
                setEditUsername(false);
            }, 1500);
        }

        if (checkEmptyUsername(username)) {
            setUsernameEmptyError(true);
            setTimeout(() => {
                setUsernameEmptyError("");
                setEditUsername(false);
            }, 1500);
        }

        if (!checkValidEmail(email)) {
            setEmailInvalidError(true);
            setTimeout(() => {
                setEmailInvalidError(false);
                setEditEmail(false);
            }, 1500);
        }
    }

    const checkEdit = () => {
        return editUsername === true || editFirstname === true || editLastname === true || editEmail === true || editAvatar === true;
    }

    const handleInitEditUsername = () => {
        setEditUsername(true);
        setUsername("");
    }

  return (
    <div className = "w-full relative top-24" style = {{height: "74rem", backgroundColor: theme === lightColor ?  "#c4bab9" : "#0a0f3b"}}>
      <div className = {theme === lightColor ? "relative rounded-2xl shadow-gray-shadow" : "relative rounded-2xl shadow-dark-shadow"} style = {{width: "30rem", height: "45rem", backgroundColor: theme === lightColor ? "#f5efed" : "#343a78", left: "5rem", top: "15rem"}}>
        <img src = {JSON.parse(currentAvatar)} alt = "User Icon" className = "w-20 h-20 relative" style = {{borderRadius: "50%", left: "12.5rem", top: "2rem", borderWidth: "3px", borderColor: "red"}}/>
        <button className = {theme === lightColor ? "font-ubuntu font-xl relative font-bold underline" : "font-ubuntu font-xl relative font-bold underline text-white"} style = {{top: "3rem", left: "10.7rem"}} onClick = {onClickInputChange}>Change user image</button>
        <input 
            type = "file"
            name = "image"
            ref = {fileInput}
            onChange = {onImageChange}
            style = {{display: "none"}}
        />
        {newWindow &&
            <CropUserImage image = {image} onCropDone = {onCropDone} onCropCancel = {onCropCancel}/>
        }
        <div className = "relative" style = {{top: "5rem"}}>
            <FaEdit className = "absolute w-6 h-6 hover:cursor-pointer z-10" style = {{left: "6.8rem", top: "0.1rem", color: theme === lightColor ? "black" : "white"}} onClick = {handleInitEditUsername}/>
            <p className = {theme === lightColor ? "font-roboto font-bold text-xl relative left-4" : "font-roboto font-semibold text-xl relative left-4 text-white"}>Username</p>
            {editUsername === true ?  <form onSubmit = {(e) => e.preventDefault()}>
                    <input type = "text" placeholder = "Type your new username" onChange = {(e) => setUsername(e.target.value)} className = {theme === lightColor ? "rounded-xl relative top-1 left-2" : "rounded-xl relative top-1 left-2 text-white"} style = {{width: "28rem", height: "3rem", backgroundColor: theme === lightColor ? "#c9c2bf" : "#343d99", borderWidth: (usernameDuplicateError || usernameEmptyError) && "2px", borderColor: (usernameDuplicateError || usernameEmptyError) && "#c92516"}}/>
                </form> : 
                <div className = "rounded-xl relative top-1 left-2" style = {{width: "28rem", height: "3rem", backgroundColor: theme === lightColor ? "#c9c2bf" : "#343d99"}}>
                <p className = {theme === lightColor ? "text-xl text-center relative font-ubuntu font-bold" : "text-xl text-center relative font-ubuntu font-bold text-white"} style = {{top: "0.4rem"}}>{username}</p>
            </div>
            }
            {usernameDuplicateError === true && <p className = "relative text-red-500 text-lg font-roboto" style = {{top: "0.5rem", left: "0.7rem"}}>{usernameDuplicateErrorCode}</p>}
            {usernameEmptyError === true && <p className = "relative text-red-500 text-lg font-roboto" style = {{top: "0.5rem", left: "0.7rem"}}>{usernameEmptyErrorCode}</p>}
        </div>

        <div className = "relative" style = {{top: "6.5rem"}}>
            <FaEdit className = "absolute w-6 h-6 hover:cursor-pointer z-10" style = {{left: "6.8rem", top: "0.1rem", color: theme === darkColor && "white"}} onClick = {() => setEditFirstname(true)}/>
            <p className = {theme === lightColor ? "font-roboto font-bold text-xl relative left-4" : "font-roboto font-semibold text-xl relative left-4 text-white"}>Firstname</p>
            {editFirstname ===true ? 
                <form onSubmit = {(e) => e.preventDefault()}>
                    <input type = "text" placeholder = "Type your new firstname" onChange = {(e) => setFirstname(e.target.value)} className = {theme === lightColor ? "rounded-xl relative top-1 left-2" : "rounded-xl relative top-1 left-2 text-white"} style = {{width: "28rem", height: "3rem", backgroundColor: theme === lightColor ? "#c9c2bf" : "#343d99"}}/>
                </form> : 
                <div className = "rounded-xl relative top-1 left-2" style = {{width: "28rem", height: "3rem", backgroundColor: theme === lightColor ? "#c9c2bf" : "#343d99"}}>
                    <p className = {theme === lightColor ? "text-xl text-center relative font-ubuntu font-bold" : "text-xl text-center relative font-ubuntu font-bold text-white"} style = {{top: "0.4rem"}}>{firstname}</p>
                </div>
            }
        </div>

        <div className = "relative" style = {{top: "8rem"}}>
            <FaEdit className = "absolute w-6 h-6 hover:cursor-pointer z-10" style = {{left: "6.8rem", top: "0.1rem", color: theme === darkColor && "white"}} onClick = {() => setEditLastname(true)}/>
            <p className = {theme === lightColor ? "font-roboto font-bold text-xl relative left-4" : "font-roboto font-bold text-xl relative left-4 text-white"}>Lastname</p>
            {editLastname ? 
                <form onSubmit = {(e) => e.preventDefault()}>
                    <input type = "text" placeholder = "Type your new lastname" onChange = {(e) => setLastname(e.target.value)} className = {theme === lightColor ? "rounded-xl relative top-1 left-2" : "rounded-xl relative top-1 left-2 text-white"} style = {{width: "28rem", height: "3rem", backgroundColor: theme === lightColor ? "#c9c2bf" : "#343d99"}}/>
                </form> :
                <div className = "rounded-xl relative top-1 left-2" style = {{width: "28rem", height: "3rem", backgroundColor: theme === lightColor ? "#c9c2bf" : "#343d99"}}>
                    <p className = {theme === lightColor ? "text-xl text-center relative font-ubuntu font-bold" : "text-xl text-center relative font-ubuntu font-bold text-white"} style = {{top: "0.4rem"}}>{lastname}</p>
                </div>
            }
        </div>

        <div className = "relative" style = {{top: "9.5rem"}}>
            <FaEdit className = "absolute w-6 h-6 hover:cursor-pointer z-10" style = {{left: "4.5rem", color: theme === darkColor && "white"}} onClick = {() => setEditEmail(true)}/>
            <p className = {theme === lightColor ? "font-roboto font-bold text-xl relative left-4" : "font-roboto font-bold text-xl relative left-4 text-white"}>Email</p>
            {editEmail ? 
                <form onSubmit = {(e) => e.preventDefault()}>
                    <input type = "text" placeholder = "Type your new email" onChange = {(e) => setEmail(e.target.value)} className = {theme === lightColor ? "rounded-xl relative top-1 left-2" : "rounded-xl relative top-1 left-2 text-white"} style = {{width: "28rem", height: "3rem", backgroundColor: theme === lightColor ? "#c9c2bf" : "#343d99", borderWidth: emailInvalidError && "2px", borderColor: emailInvalidError && "#c92516"}}/>
                </form> : 
                <div className = "rounded-xl relative top-1 left-2" style = {{width: "28rem", height: "3rem", backgroundColor: theme === lightColor ? "#c9c2bf" : "#343d99"}}>
                    <p className = {theme === lightColor ? "text-xl text-center relative font-ubuntu font-bold" : "text-xl text-center relative font-ubuntu font-bold text-white"} style = {{top: "0.4rem"}}>{email}</p>
                </div>
            }
            {emailInvalidError && <p className = "relative text-red-500 text-lg font-roboto" style = {{top: "0.5rem", left: "0.7rem"}}>{emailInvalidErrorCode}</p>}
            <div>
                {displayEditProgress === true && <p className = "text-2xl font-ubuntu text-green-500 relative font-bold" style = {{left: "12rem", top: "2rem"}}>Saving...</p>}
                {displayEditNoti && <p className = "text-2xl font-ubuntu text-green-500 relative font-bold" style = {{left: "8.5rem", top: "2rem"}}>Saving completed!</p>}
            </div>
            <div className = "relative" style = {{left: "12rem", top: "3rem"}}>
                {checkEdit() && <button className = "w-20 h-12 bg-white font-ubuntu text-xl text-green-500 border-green-500 rounded-xl" onClick = {onSubmitEdit} style = {{borderWidth: "3px"}}>Save</button>}
            </div>
        </div>
      </div>
      <div className = {theme === lightColor ? "relative rounded-2xl shadow-gray-shadow" : "relative rounded-2xl shadow-dark-shadow"} style = {{width: "50rem", height: "64rem", backgroundColor: theme === lightColor ? "#f5efed" : "#343a78", bottom: "40rem", left: "40rem"}} onClick = {onHandleDisable}>
            <UserFavorite theme = {theme} lightColor = {lightColor} recentUser = {recentUser}/>
      </div>
    </div>
  )
}

export default UserProfile
