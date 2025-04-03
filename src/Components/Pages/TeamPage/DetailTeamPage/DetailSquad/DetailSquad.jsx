import React, { useEffect, useState } from 'react'
import { getCoachByTeamName, ListCoach } from '../../../../../APIService/CoachService'
import WebFont from 'webfontloader';
import DetailSquadCoach from './DetailSquadCoach';
import DetailSquadGoalkeeper from './DetailSquadGoalkeeper';
import DetailSquadDefender from './DetailSquadDefender';
import { ListPlayer } from '../../../../../APIService/PlayerService';
import DetailSquadMidfielder from './DetailSquadMidfielder';
import DetailSquadForward from './DetailSquadForward';
import Formation from './Formation/Formation';

const DetailSquad = ({teamId, team, FormationCoordinate}) => {
    const [coach, setCoach] = useState(null);
    const [playerList, setPlayerList] = useState([]);

    useEffect(() => {
        ListPlayer().then((response) => {
            setPlayerList(response.data);
        })
    }, [])

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu', 'Space Grotesk','Noticia Text', 'Alfa Slab One']
            }
        })
    }, [])
    useEffect(() => {
        getCoachByTeamName(team?.name).then((response) => {
            setCoach(response.data);
        }).catch(err => console.error(err));
    }, [])
  return (
    <div className = "w-full relative" style = {{backgroundColor: "#dfe2e8"}}>
        <div>
            <DetailSquadCoach teamId = {teamId} team = {team} coach = {coach}/>
        </div>
        <div className = "mt-[5rem]">
            <DetailSquadGoalkeeper teamId = {teamId} team = {team} playerList = {playerList}/>
        </div>
        <div className = "mt-[2rem]">
            <DetailSquadDefender teamId = {teamId} team = {team} playerList = {playerList}/>
        </div>
        <div className = "mt-[1rem]">
            <DetailSquadMidfielder teamId = {teamId} team = {team} playerList = {playerList}/>
        </div>
        <div className = "mt-[1rem]">
            <DetailSquadForward teamId = {teamId} team = {team} playerList = {playerList}/>
        </div>
        <div className = "mt-[3rem] pb-[2rem]">
            <Formation team = {team} teamId = {teamId} FormationCoordinate = {FormationCoordinate}/>
        </div>
    </div>
  )
}

export default DetailSquad
