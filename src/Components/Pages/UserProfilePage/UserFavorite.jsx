import React, { useEffect } from 'react'
import WebFont from 'webfontloader';
import UserHiddenCard from './UserHiddenCard';

const UserFavorite = ({colorTheme, lightColor, darkColor}) => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Agdasima']
            }
        })
    }, []);
  return (
    <div>
      <div className = "relative h-64 rounded-xl" style = {{ backgroundColor: colorTheme === lightColor ? "#c8cecf" : ""}}>
        <div className = "relative" style = {{top: "1rem", left: "1.5rem"}}>
            <p className = {colorTheme === lightColor ? "text-4xl font-agdasima font-bold" : "text-4xl font-agdasima font-bold text-white"}>Favorite Team</p>
            <div className = "flex space-x-16">
                <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard />
            </div>
        </div>
      </div>
      <div className = "relative h-64 rounded-xl" style = {{ backgroundColor: colorTheme === lightColor ? "" : "#343d99"}}>
        <div className = "relative" style = {{top: "1rem", left: "1.5rem"}}>
            <p className = {colorTheme === lightColor ? "text-4xl font-agdasima font-bold" : "text-4xl font-agdasima font-bold text-white"}>Favorite Player</p>
            <div className = "flex space-x-16">
                <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard />
            </div>
        </div>
      </div>
      <div className = "relative h-64 rounded-xl" style = {{ backgroundColor: colorTheme === lightColor ? "#c8cecf" : ""}}>
        <div className = "relative" style = {{top: "1rem", left: "1.5rem"}}>
            <p className = {colorTheme === lightColor ? "text-4xl font-agdasima font-bold" : "text-4xl font-agdasima font-bold text-white"}>Favorite Coach</p>
            <div className = "flex space-x-16">
                <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard />
            </div>
        </div>
      </div>
      <div className = "relative h-64 rounded-xl" style = {{ backgroundColor: colorTheme === lightColor ? "" : "#343d99"}}>
        <div className = "relative" style = {{top: "1rem", left: "1.5rem"}}>
            <p className = {colorTheme === lightColor ? "text-4xl font-agdasima font-bold" : "text-4xl font-agdasima font-bold text-white"}>Favorite League</p>
            <div className = "flex space-x-16">
                <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard />
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserFavorite
