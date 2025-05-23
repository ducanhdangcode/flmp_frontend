import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';
import HomeContent from './Components/Pages/HomePage/HomeContent/HomeContent';
import { Route, Routes, useLocation} from 'react-router-dom';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import Register from './Components/Pages/RegisterPage/Register';
import WebFont from 'webfontloader';
import UserProfile from './Components/Pages/UserProfilePage/UserProfile';
import Team from './Components/Pages/TeamPage/Team';
import DetailTeam from './Components/Pages/TeamPage/DetailTeam';
import { ThemeProvider} from './Context/ThemeContext';
import { UserProvider } from './Context/UserContext';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import { useSpinnerContext} from './Context/SpinnerContext';
import Spinner from './Components/Spinners/Spinner';
import { TeamHeaderProvider } from './Context/TeamHeaderContext';
import PlayerProfile from './Components/Pages/PlayerProfilePage/PlayerProfile';
import { PlayerProvider } from './Context/PlayerContext';
import AdminPage from './Components/Pages/AdminPage/AdminPage';
import AdminUserDashboard from './Components/Pages/AdminPage/AdminUserDashboard/Services/UserService/AdminUserDashboard';
import AdminTeamDashboard from './Components/Pages/AdminPage/AdminUserDashboard/Services/TeamService/AdminTeamDashboard';
import CoachProfile from './Components/Pages/CoachProfilePage/CoachProfile';

function App() {
  // theme set up
  const lightColor = "#e9f2eb";
  const darkColor = "#0c0a30";
  const [colorTheme, setColorTheme] = useState(localStorage.getItem('color-theme'));

  // login state to check if user is logged in or not
  const [loginState, setLoginState] = useState(localStorage.getItem('login-state'));


  const [mainUserImage, setMainUserImage] = useState(localStorage.getItem('user-image'));

  const [displayUserDropdown, setDisplayUserDropdown] = useState(false);

  const [teamId, setTeamId] = useState(localStorage.getItem('team-id'));
  const [teamLogo, setTeamLogo] = useState(localStorage.getItem("team-logo"));

  // style for detail team
  const [detailLogoWidth, setDetailLogoWidth] = useState(localStorage.getItem('detail-logo-width'));
  const [detailLogoHeight, setDetailLogoHeight] = useState(localStorage.getItem('detail-logo-height'));
  const [detailLogoTop, setDetailLogoTop] = useState(localStorage.getItem('detail-logo-top'));
  const [detailLogoLeft, setDetailLogoLeft] = useState(localStorage.getItem('detail-logo-left'));
  const [detailNameBottom, setDetailNameBottom] = useState(localStorage.getItem('detail-name-bottom'));

  // spinner context
  const {displaySpinner, setDisplaySpinner} = useSpinnerContext();

  // custom spinner
  const [customSpinner, setCustomSpinner] = useState(false);

  // location
  const location = useLocation();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Changa']
      }
    })
  })

  useEffect(() => {
    localStorage.setItem('login-state', loginState);
    localStorage.setItem('team-logo', teamLogo);
    localStorage.setItem('team-id', teamId);
    localStorage.setItem('detail-logo-width', detailLogoWidth);
    localStorage.setItem('detail-logo-height', detailLogoHeight);
    localStorage.setItem('detail-logo-top', detailLogoTop);
    localStorage.setItem('detail-logo-left', detailLogoLeft);
    localStorage.setItem('detail-name-bottom', detailNameBottom);
  }, [loginState, mainUserImage, teamLogo, teamId, detailLogoHeight, detailLogoWidth, detailLogoLeft, detailLogoTop, detailNameBottom])

  const handleChangeUserDropdown = () => {
    displayUserDropdown === false ? setDisplayUserDropdown(true) : setDisplayUserDropdown(false);
  }

  const disableDropdown = () => {
    setDisplayUserDropdown(false);
  }

  const onHandleLoginStateSuccess = () => {
    setLoginState("success");
    localStorage.setItem('login-state', "success");
  }

  const onHandleLoginStateFailed = () => {
    if (loginState) {
      setLoginState("");
    }
    localStorage.setItem('login-state', loginState);
  }

  const disableLoginState = () => {
    setLoginState("failed");
    localStorage.setItem('login-state', "failed");
    disableDropdown();
  }

  const onChangeMainUserImage = (val) => {
    setMainUserImage(val);
    localStorage.setItem('user-image', mainUserImage);
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

  const setupCustomSpinner = (choice) => {
    setCustomSpinner(choice);
  }
  

  return (
    <div>
      {displaySpinner === false ? 
        <ThemeProvider>
          <UserProvider>
            <TeamHeaderProvider>
              <PlayerProvider>
                <Routes>
                  <Route
                    path = "/admin"
                    element = {
                      <>
                        <ScrollToTop />
                        <AdminPage />
                      </>
                    }
                  />

                  <Route 
                    path = "/admin/user"
                    element = {
                      <>
                        <ScrollToTop />
                        <AdminUserDashboard />
                      </>
                    }
                  />

                  <Route 
                    path = "/admin/team"
                    element = {
                      <>
                        <ScrollToTop />
                        <AdminTeamDashboard />
                      </>
                    }
                  />
                </Routes>
                <div className = "relative w-screen top-0 overflow-x-clip block overflow-y-hidden">
                  <Helmet>
                    <style>{`body {background-color: ${colorTheme};}`}</style>
                  </Helmet>
                  {!location.pathname.match("/admin") && 
                    <Navbar loginState = {loginState} displayUserDropdown = {displayUserDropdown} handleChangeUserDropdown = {handleChangeUserDropdown} disableLoginState = {disableLoginState} disableDropdown={disableDropdown}/>
                  }
                  <div className = "">
                    <Routes>
                      <Route 
                          path = "/login" 
                          element = {
                            <>
                              <ScrollToTop />
                              <LoginPage 
                                loginState = {loginState} 
                                onHandleLoginStateSuccess = {onHandleLoginStateSuccess} 
                                onHandleLoginStateFailed = {onHandleLoginStateFailed} 
                              /> 
                            </>
                          }
                      />
        
                      <Route path = "/" element = {<HomeContent colorTheme={colorTheme} lightColor={lightColor} darkColor={darkColor} disableDropdown = {disableDropdown}/>} />
        
                      <Route 
                        path = "/register" 
                        element = {
                          <>
                            <ScrollToTop />
                            <Register />
                          </>
                        } 
                      />
        
                      <Route path = "/user-profile" element = {<UserProfile recentUsername = {localStorage.getItem('recent-username')} recentPassword = {localStorage.getItem('recent-password')} mainUserImage = {mainUserImage} onChangeMainUserImage = {onChangeMainUserImage} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} teamId = {teamId}/>} />
        
                      <Route 
                        path = "/team" 
                        element = {
                          <>
                            <ScrollToTop />
                            <Team colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} setupTeamId = {setupTeamId} setupTeamLogo = {setupTeamLogo} setupDetailLogoHeight = {setupDetailLogoHeight} setupDetailLogoWidth = {setupDetailLogoWidth} setupDetailLogoTop = {setupDetailLogoTop} setupDetailLogoLeft = {setupDetailLogoLeft} setupDetailNameBottom = {setupDetailNameBottom}/>
                          </>
                        } 
                      />
        
                      <Route 
                        path = "/team/:team_name" 
                        element = {
                          <>
                            <ScrollToTop />
                            <DetailTeam teamId = {teamId} teamLogo = {teamLogo} detailLogoHeight = {detailLogoHeight} detailLogoWidth = {detailLogoWidth} detailLogoTop = {detailLogoTop} detailLogoLeft = {detailLogoLeft} detailNameBottom = {detailNameBottom} customSpinner={customSpinner} setupCustomSpinner={setupCustomSpinner}/>
                          </>
                        }
                      />

                      <Route 
                        path = "/team/:team_name/:player_name"
                        element = {
                          <>
                            <ScrollToTop />
                            <PlayerProfile />
                          </>
                        }
                      />

                      <Route 
                        path = "/team/:team_name/coach/:coach_name"
                        element = {
                          <>
                            <ScrollToTop />
                            <CoachProfile />
                          </>
                        }
                      />
                    </Routes>
                  </div>
                  <div className = "">
                    <Footer />
                  </div>
                </div>
              </PlayerProvider>
            </TeamHeaderProvider>
          </UserProvider>
        </ThemeProvider> : 
        //spinner
        <div className = "w-full h-full bg-white">
          <Spinner />
        </div>
      }
    </div>
  )
}

export default App;
