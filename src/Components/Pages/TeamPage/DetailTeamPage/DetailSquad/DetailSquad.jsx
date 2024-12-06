import React, { useEffect, useState } from 'react'
import { ListCoach } from '../../../../../APIService/CoachService'
import WebFont from 'webfontloader';
import ViewProfile from './ViewProfile';
import DetailSquadCoach from './DetailSquadCoach';
import DetailSquadGoalkeeper from './DetailSquadGoalkeeper';
import DetailSquadDefender from './DetailSquadDefender';
import { ListPlayer } from '../../../../../APIService/PlayerService';
import DetailSquadMidfielder from './DetailSquadMidfielder';
import DetailSquadForward from './DetailSquadForward';

const DetailSquad = ({teamId, teamList}) => {
    const [coachList, setCoachList] = useState([]);
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
        ListCoach().then((response) => {
            setCoachList(response.data);
        })
    }, [])
  return (
    <div className = "w-full relative block" style = {{height: "350rem", backgroundColor: "#dfe2e8"}}>
        <DetailSquadCoach teamId = {teamId} teamList = {teamList} coachList = {coachList} />
        <DetailSquadGoalkeeper teamId = {teamId} teamList = {teamList} playerList = {playerList}/>
        <DetailSquadDefender teamId = {teamId} teamList = {teamList} playerList = {playerList}/>
        <DetailSquadMidfielder teamId = {teamId} teamList = {teamList} playerList = {playerList}/>
        <DetailSquadForward teamId = {teamId} teamList = {teamList} playerList = {playerList}/>
    </div>
  )
}

export default DetailSquad
