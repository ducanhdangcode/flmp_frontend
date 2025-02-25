import React, { useEffect, useState } from 'react'
import DetailOverview from './DetailTeamPage/DetailOverview/DetailOverview'
import { ListTeams} from '../../../APIService/TeamService';
import DetailSquad from './DetailTeamPage/DetailSquad/DetailSquad';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import CustomSpinner from '../../Spinners/CustomSpinner';
import TeamHeader from './DetailTeamPage/DetailTeamHeader/TeamHeader';
import { useTeamHeaderContext } from '../../../Context/TeamHeaderContext';
import { useParams } from 'react-router-dom';

const DetailTeam = ({teamVideoTitles, teamKits, teamChairman, handleFavorite, recentId, customSpinner, setupCustomSpinner}) => {

    const [FormationCoordinate, setFormationCoordinate] = useState([]);

    const {team_name} = useParams();

    const {teamList, teamId, storedTeamLogo, detailLogoHeight, detailLogoWidth, detailLogoTop, detailLogoLeft, detailNameBottom, checkSelectOverview, checkSelectFixtures, checkSelectResult, checkSelectNews, checkSelectSquad, setupSelectedBar, handleAddFavoriteTeam, handleRemoveFavoriteTeam, setTeamList} = useTeamHeaderContext();

    useEffect(() => {
        setupActiveTeam();
    }, [teamList, team_name])

    useEffect(() => {
        fetch("/FormationCoordinate.json")
            .then(response => response.json())
            .then(json => setFormationCoordinate(json))
            .catch(err => console.error(err));
    }, [team_name])

  const setupActiveTeam = () => {
      ListTeams().then((response) => {
          console.log("fetched team: " + response.data);
          setTeamList(response.data);
          localStorage.setItem("team-list", response.data);
      }).catch(err => console.error(err));
  }
  return (
    <div>
        <ScrollToTop />
        <div className = "w-full relative top-24" style = {{}}>
            {/* team header */}
            <TeamHeader 
                storedTeamLogo = {storedTeamLogo}
                detailLogoWidth = {detailLogoWidth}
                detailLogoHeight = {detailLogoHeight}
                detailLogoTop = {detailLogoTop}
                detailLogoLeft = {detailLogoLeft}
                teamList = {teamList}
                teamId = {teamId}
                detailNameBottom = {detailNameBottom}
                checkSelectOverview = {checkSelectOverview}
                checkSelectFixtures = {checkSelectFixtures}
                checkSelectResult = {checkSelectResult}
                checkSelectNews = {checkSelectNews}
                checkSelectSquad = {checkSelectSquad}
                setupSelectedBar = {setupSelectedBar}
                setupCustomSpinner = {setupCustomSpinner}
                handleAddFavoriteTeam = {handleAddFavoriteTeam}
                handleRemoveFavoriteTeam = {handleRemoveFavoriteTeam}
            />

            {checkSelectOverview === "true" && 
                <>
                    <DetailOverview teamId={teamId} teamLogo={storedTeamLogo} detailLogoHeight={detailLogoHeight} detailLogoWidth={detailLogoWidth} detailLogoTop={detailLogoTop} detailLogoLeft={detailLogoLeft} detailNameBottom={detailNameBottom} teamVideoTitles={teamVideoTitles} teamKits = {teamKits} teamChairman = {teamChairman} handleFavorite = {handleFavorite} recentId = {recentId} teamList = {teamList} />
                </>
            }

            {checkSelectSquad === "true" && 
                <>
                    <DetailSquad teamId = {teamId} teamList = {teamList} FormationCoordinate = {FormationCoordinate}/>
                </>
            }

            {customSpinner === true && 
                <CustomSpinner />
            }
        </div>
    </div>
  )
}

export default DetailTeam
