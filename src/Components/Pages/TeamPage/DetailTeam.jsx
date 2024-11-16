import React, { useEffect, useState } from 'react'
import DetailOverview from './DetailTeamPage/DetailOverview/DetailOverview'

const DetailTeam = ({teamId, teamLogo, detailLogoHeight, detailLogoWidth, detailLogoTop, detailLogoLeft, detailNameBottom, teamVideoTitles, teamKits, teamChairman, handleFavorite, recentId}) => {
  return (
    <div className = "w-full relative top-24" style = {{height: "150rem"}}>
        <DetailOverview teamId={teamId} teamLogo={teamLogo} detailLogoHeight={detailLogoHeight} detailLogoWidth={detailLogoWidth} detailLogoTop={detailLogoTop} detailLogoLeft={detailLogoLeft} detailNameBottom={detailNameBottom} teamVideoTitles={teamVideoTitles} teamKits = {teamKits} teamChairman = {teamChairman} handleFavorite = {handleFavorite} recentId = {recentId}/>
    </div>
  )
}

export default DetailTeam
