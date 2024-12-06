import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';
import HomeContent from './Components/Pages/HomePage/HomeContent/HomeContent';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import Register from './Components/Pages/RegisterPage/Register';
import WebFont from 'webfontloader';
import UserProfile from './Components/Pages/UserProfilePage/UserProfile';
import Team from './Components/Pages/TeamPage/Team';
import DetailTeam from './Components/Pages/TeamPage/DetailTeam';
import { updateUser } from './APIService/UserService.';

function App() {
  const lightColor = "#e9f2eb";
  const darkColor = "#0c0a30";

  const [colorTheme, setColorTheme] = useState(localStorage.getItem('color-theme'));

  const [loginState, setLoginState] = useState(localStorage.getItem('login-state'));

  const [recentUsername, setRecentUsername] = useState(localStorage.getItem('recent-username'));
  const [recentPassword, setRecentPassword] = useState(localStorage.getItem('recent-password'));
  const [recentFirstname, setRecentFirstname] = useState(localStorage.getItem('recent-firstname'));
  const [recentLastname, setRecentLastname] = useState(localStorage.getItem('recent-lastname'));
  const [recentEmail, setRecentEmail] = useState(localStorage.getItem('recent-email'));
  const [recentAvatar, setRecentAvatar] = useState(localStorage.getItem('recent-avatar'));
  const [recentId, setRecentId] = useState(localStorage.getItem('recent-id'));

  const [mainUserImage, setMainUserImage] = useState(localStorage.getItem('user-image'));

  const [displayUserDropdown, setDisplayUserDropdown] = useState(false);

  const [teamId, setTeamId] = useState(localStorage.getItem('team-id'));
  const [teamLogo, setTeamLogo] = useState(localStorage.getItem("team-logo"));
  const [teamVideoTitles, setTeamVideoTitles] = useState(JSON.parse(localStorage.getItem('team-video-title')));

  // style for detail team
  const [detailLogoWidth, setDetailLogoWidth] = useState(localStorage.getItem('detail-logo-width'));
  const [detailLogoHeight, setDetailLogoHeight] = useState(localStorage.getItem('detail-logo-height'));
  const [detailLogoTop, setDetailLogoTop] = useState(localStorage.getItem('detail-logo-top'));
  const [detailLogoLeft, setDetailLogoLeft] = useState(localStorage.getItem('detail-logo-left'));
  const [detailNameBottom, setDetailNameBottom] = useState(localStorage.getItem('detail-name-bottom'));

  // team kit
  const [teamKits, setTeamKits] = useState(JSON.parse(localStorage.getItem('team-kits')));

  // team chairman
  const [teamChairman, setTeamChairman] = useState(localStorage.getItem('team-chairman'));

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Changa']
      }
    })
  })

  useEffect(() => {
    localStorage.setItem('color-theme', colorTheme);
    localStorage.setItem('login-state', loginState);
    localStorage.setItem('recent-username', recentUsername);
    localStorage.setItem('recent-password', recentPassword);
    localStorage.setItem('user-image', mainUserImage);
    localStorage.setItem('recent-firstname', recentFirstname);
    localStorage.setItem('recent-lastname', recentLastname);
    localStorage.setItem('recent-email', recentEmail);
    localStorage.setItem('recent-avatar', recentAvatar);
    localStorage.setItem('recent-id', recentId);
    localStorage.setItem('team-logo', teamLogo);
    localStorage.setItem('team-id', teamId);
    localStorage.setItem('detail-logo-width', detailLogoWidth);
    localStorage.setItem('detail-logo-height', detailLogoHeight);
    localStorage.setItem('detail-logo-top', detailLogoTop);
    localStorage.setItem('detail-logo-left', detailLogoLeft);
    localStorage.setItem('detail-name-bottom', detailNameBottom);
    localStorage.setItem('team-video-title', JSON.stringify(teamVideoTitles));
    localStorage.setItem('team-kits', JSON.stringify(teamKits));
    localStorage.setItem('team-chairman', teamChairman);
  }, [colorTheme, loginState, recentUsername, recentPassword, mainUserImage, recentFirstname, recentLastname, recentEmail, recentAvatar, recentId, teamLogo, teamId, detailLogoHeight, detailLogoWidth, detailLogoLeft, detailLogoTop, detailNameBottom, teamVideoTitles, teamKits, teamChairman])

  const handleChangeUserDropdown = () => {
    displayUserDropdown === false ? setDisplayUserDropdown(true) : setDisplayUserDropdown(false);
  }

  const disableDropdown = () => {
    setDisplayUserDropdown(false);
  }

  const onHandleLoginStateSuccess = () => {
    if (!loginState) {
      setLoginState("success");
    }
    localStorage.setItem('login-state', loginState);
  }

  const onHandleLoginStateFailed = () => {
    if (loginState) {
      setLoginState("");
    }
    localStorage.setItem('login-state', loginState);
  }

  const setupRecentUsername = (username) => {
    setRecentUsername(username);
    localStorage.setItem('recent-username', recentUsername);
  }

  const setupRecentPassword = (password) => {
    setRecentPassword(password);
    localStorage.setItem('recent-password', recentPassword);
  }

  const onHandleChangeTheme = () => {
    colorTheme === lightColor ? setColorTheme(darkColor) : setColorTheme(lightColor);
    localStorage.setItem('color-theme', colorTheme);
  }

  const disableLoginState = () => {
    setLoginState(false);
    disableDropdown();
  }

  const onChangeMainUserImage = (val) => {
    setMainUserImage(val);
    localStorage.setItem('user-image', mainUserImage);
  }

  const setupRecentFirstname = (firstname) => {
    setRecentFirstname(firstname);
    localStorage.setItem('recent-firstname', recentFirstname);
  }

  const setupRecentLastname = (lastname) => {
    setRecentLastname(lastname);
    localStorage.setItem('recent-lastname', recentLastname);
  }

  const setupRecentEmail = (email) => {
    setRecentEmail(email);
    localStorage.setItem('recent-email', recentEmail);
  }

  const setupRecentAvatar = (avatar) => {
    setRecentAvatar(avatar);
    localStorage.setItem('recent-avatar', recentAvatar);
  }

  const setupRecentId = (id) => {
    setRecentId(id);
    localStorage.setItem('recent-id', recentId);
  }

  const setupTeamId = (id) => {
    setTeamId(id);
    localStorage.setItem('team-id', teamId);
  }

  const setupTeamLogo = (logo) => {
    setTeamLogo(logo);
    localStorage.setItem('team-logo', teamLogo);
  }

  const setupDetailLogoWidth = (width) => {
    setDetailLogoWidth(width);
    localStorage.setItem('detail-logo-width', detailLogoWidth);
  }

  const setupDetailLogoHeight = (height) => {
    setDetailLogoHeight(height);
    localStorage.setItem('detail-logo-height', detailLogoHeight);
  }

  const setupDetailLogoTop = (top) => {
    setDetailLogoTop(top);
    localStorage.setItem('detail-logo-top', detailLogoTop);
  }

  const setupDetailLogoLeft = (left) => {
    setDetailLogoLeft(left);
    localStorage.setItem('detail-logo-left', detailLogoLeft);
  }

  const setupDetailNameBottom = (bottom) => {
    setDetailNameBottom(bottom);
    localStorage.setItem('detail-name-bottom', detailNameBottom);
  }

  const setupTeamVideoTitles = (titles) => {
    setTeamVideoTitles(titles);
  } 

  const setupTeamKits = (kits) => {
    setTeamKits(kits);
  }

  const setupTeamChairman = (chairman) => {
    setTeamChairman(chairman);
  }

  return (
    <div className = "relative w-screen top-0 overflow-x-clip block overflow-y-hidden" style = {{maxHeight: "400rem"}}>
      <Helmet>
        <style>{`body {background-color: ${colorTheme};}`}</style>
      </Helmet>
      <Navbar colorTheme = {colorTheme} onHandleChangeTheme = {onHandleChangeTheme} lightColor = {lightColor} darkColor = {darkColor} loginState = {loginState} displayUserDropdown = {displayUserDropdown} handleChangeUserDropdown = {handleChangeUserDropdown} disableLoginState = {disableLoginState} disableDropdown={disableDropdown} recentAvatar = {recentAvatar}/>
      <div className = "" style = {{maxHeight: "400rem"}}>
        <Routes>
          <Route path = "/login" element = {<LoginPage loginState = {loginState} onHandleLoginStateSuccess = {onHandleLoginStateSuccess} onHandleLoginStateFailed = {onHandleLoginStateFailed} setupRecentUsername = {setupRecentUsername} setupRecentPassword = {setupRecentPassword} setupRecentFirstname = {setupRecentFirstname} setupRecentLastname = {setupRecentLastname} setupRecentEmail = {setupRecentEmail} setupRecentAvatar = {setupRecentAvatar} setupRecentId = {setupRecentId}/> }/>

          <Route path = "/" element = {<HomeContent colorTheme={colorTheme} lightColor={lightColor} darkColor={darkColor} disableDropdown = {disableDropdown}/>} />

          <Route path = "/register" element = {<Register />} />

          <Route path = "/user-profile" element = {<UserProfile recentUsername = {localStorage.getItem('recent-username')} recentPassword = {localStorage.getItem('recent-password')} mainUserImage = {mainUserImage} onChangeMainUserImage = {onChangeMainUserImage} setupRecentUsername = {setupRecentUsername} recentFirstname = {recentFirstname} recentLastname = {recentLastname} recentEmail = {recentEmail} recentAvatar = {recentAvatar} recentId = {recentId} setupRecentAvatar = {setupRecentAvatar} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} setupRecentFirstname = {setupRecentFirstname} setupRecentLastname = {setupRecentLastname} setupRecentEmail = {setupRecentEmail} teamId = {teamId}/>} />

          <Route path = "/team" element = {<Team colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} setupTeamId = {setupTeamId} setupTeamLogo = {setupTeamLogo} setupDetailLogoHeight = {setupDetailLogoHeight} setupDetailLogoWidth = {setupDetailLogoWidth} setupDetailLogoTop = {setupDetailLogoTop} setupDetailLogoLeft = {setupDetailLogoLeft} setupDetailNameBottom = {setupDetailNameBottom} setupTeamVideoTitles = {setupTeamVideoTitles} setupTeamKits = {setupTeamKits} setupTeamChairman = {setupTeamChairman}/>} />

          <Route path = "/team/:team_name" element = {<DetailTeam teamId = {teamId} teamLogo = {teamLogo} detailLogoHeight = {detailLogoHeight} detailLogoWidth = {detailLogoWidth} detailLogoTop = {detailLogoTop} detailLogoLeft = {detailLogoLeft} detailNameBottom = {detailNameBottom} teamVideoTitles = {teamVideoTitles} teamKits = {teamKits} teamChairman = {teamChairman} recentId = {recentId}/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
