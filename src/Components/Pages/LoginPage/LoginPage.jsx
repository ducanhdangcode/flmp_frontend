import React from 'react'
import LoginContent from './LoginContent'
import { useState } from 'react'

const LoginPage = ({loginState, onHandleLoginStateSuccess, onHandleLoginStateFailed, setupRecentUsername, setupRecentPassword, setupRecentFirstname, setupRecentLastname, setupRecentEmail, setupRecentAvatar, setupRecentId, setupFavoriteTeams}) => {
  const lightColor = "#e9f2eb";
  const darkColor = "#0c0a30";
  const [colorTheme, setColorTheme] = useState(lightColor);
  return (
    <div className = "relative w-screen top-0 overflow-x-clip" style = {{}}>
      <LoginContent colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} loginState = {loginState} onHandleLoginStateSuccess = {onHandleLoginStateSuccess} onHandleLoginStateFailed = {onHandleLoginStateFailed} setupRecentUsername = {setupRecentUsername} setupRecentPassword = {setupRecentPassword} setupRecentFirstname = {setupRecentFirstname} setupRecentLastname = {setupRecentLastname} setupRecentEmail = {setupRecentEmail} setupRecentAvatar = {setupRecentAvatar} setupRecentId = {setupRecentId} setupFavoriteTeams = {setupFavoriteTeams}/>
    </div>
  )
}

export default LoginPage
