import React, { useEffect, useState } from 'react'
import WebFont from 'webfontloader';
import UserHiddenCard from './UserHiddenCard';
import { useThemeContext } from '../../../Context/ThemeContext';

const UserFavorite = ({recentUser}) => {
  const {theme, lightColor} = useThemeContext();
  const [favoriteTeamPage, setFavoriteTeamPage] = useState(1);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Agdasima', 'Space Grotesk']
      }
    })
  })

  const handleGoToNextTeamFavoritePage = () => {
    setFavoriteTeamPage((favoriteTeamPage) => favoriteTeamPage + 1);
  }

  const handleGoToPreviousTeamFavoritePage = () => {
    setFavoriteTeamPage((favoriteTeamPage) => favoriteTeamPage - 1);
  }
  return (
    <div>
      <div className = "relative h-64 rounded-xl" style = {{ backgroundColor: theme === lightColor ? "#c8cecf" : ""}}>
        <div className = "relative" style = {{top: "1rem", left: "1.5rem"}}>
            <div className = "flex">
              <p className = {theme === lightColor ? "text-4xl font-agdasima font-bold" : "text-4xl font-agdasima font-bold text-white"}>Favorite Team</p>
              <p className = {theme === lightColor ? "text-xl font-space-grotesk font-bold" : "text-xl font-space-grotesk font-bold text-white"} style = {{position: "relative", bottom: "1rem", left: "18rem", opacity: favoriteTeamPage === 1 && "0.5", cursor: favoriteTeamPage === 1 ? "context-menu" : "pointer"}} onClick = {handleGoToPreviousTeamFavoritePage}>Previous Page</p>
              <p className = {theme === lightColor ? "text-xl font-space-grotesk font-bold" : "text-xl font-space-grotesk font-bold text-white"} style = {{position: "relative", bottom: "1rem", left: "22rem", cursor: favoriteTeamPage === 5 ? "context-menu" : "pointer", opacity: favoriteTeamPage === 5 && "0.5"}} onClick = {handleGoToNextTeamFavoritePage}>Next Page</p>
            </div>
            {favoriteTeamPage === 1 && 
              <div className = "flex space-x-16">
                <UserHiddenCard recentUser = {recentUser} index = {0}/>
                <UserHiddenCard recentUser = {recentUser} index = {1}/>
                <UserHiddenCard recentUser = {recentUser} index = {2}/>
                <UserHiddenCard recentUser = {recentUser} index = {3}/>
              </div>
            }
            {favoriteTeamPage === 2 && 
              <div className = "flex space-x-16">
                <UserHiddenCard recentUser = {recentUser} index = {4}/>
                <UserHiddenCard recentUser = {recentUser} index = {5}/>
                <UserHiddenCard recentUser = {recentUser} index = {6}/>
                <UserHiddenCard recentUser = {recentUser} index = {7}/>
              </div>
            }
            {favoriteTeamPage === 3 && 
              <div className = "flex space-x-16">
                <UserHiddenCard recentUser = {recentUser} index = {8}/>
                <UserHiddenCard recentUser = {recentUser} index = {9}/>
                <UserHiddenCard recentUser = {recentUser} index = {10}/>
                <UserHiddenCard recentUser = {recentUser} index = {11}/>
              </div>
            }
            {favoriteTeamPage === 4 && 
              <div className = "flex space-x-16">
                <UserHiddenCard recentUser = {recentUser} index = {12}/>
                <UserHiddenCard recentUser = {recentUser} index = {13}/>
                <UserHiddenCard recentUser = {recentUser} index = {14}/>
                <UserHiddenCard recentUser = {recentUser} index = {15}/>
              </div>
            }
            {favoriteTeamPage === 5 && 
              <div className = "flex space-x-16">
                <UserHiddenCard recentUser = {recentUser} index = {16}/>
                <UserHiddenCard recentUser = {recentUser} index = {17}/>
                <UserHiddenCard recentUser = {recentUser} index = {18}/>
                <UserHiddenCard recentUser = {recentUser} index = {19}/>
              </div>
            }
        </div>
      </div>
      <div className = "relative h-64 rounded-xl" style = {{ backgroundColor: theme === lightColor ? "" : "#343d99"}}>
        <div className = "relative" style = {{top: "1rem", left: "1.5rem"}}>
            <p className = {theme === lightColor ? "text-4xl font-agdasima font-bold" : "text-4xl font-agdasima font-bold text-white"}>Favorite Player</p>
            <div className = "flex space-x-16">
                {/* <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard /> */}
            </div>
        </div>
      </div>
      <div className = "relative h-64 rounded-xl" style = {{ backgroundColor: theme === lightColor ? "#c8cecf" : ""}}>
        <div className = "relative" style = {{top: "1rem", left: "1.5rem"}}>
            <p className = {theme === lightColor ? "text-4xl font-agdasima font-bold" : "text-4xl font-agdasima font-bold text-white"}>Favorite Coach</p>
            <div className = "flex space-x-16">
                {/* <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard /> */}
            </div>
        </div>
      </div>
      <div className = "relative h-64 rounded-xl" style = {{ backgroundColor: theme === lightColor ? "" : "#343d99"}}>
        <div className = "relative" style = {{top: "1rem", left: "1.5rem"}}>
            <p className = {theme === lightColor ? "text-4xl font-agdasima font-bold" : "text-4xl font-agdasima font-bold text-white"}>Favorite League</p>
            <div className = "flex space-x-16">
                {/* <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard />
                <UserHiddenCard /> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserFavorite
