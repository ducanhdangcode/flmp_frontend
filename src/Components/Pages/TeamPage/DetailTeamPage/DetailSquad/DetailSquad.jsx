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
import Formation from './Formation/Formation';

const DetailSquad = ({teamId, teamList, FormationCoordinate}) => {
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
    <div className = "w-full relative" style = {{backgroundColor: "#dfe2e8"}}>
        <div>
            <DetailSquadCoach teamId = {teamId} teamList = {teamList} coachList = {coachList} />
        </div>
        <div className = "mt-[5rem]">
            <DetailSquadGoalkeeper teamId = {teamId} teamList = {teamList} playerList = {playerList}/>
        </div>
        <div className = "mt-[2rem]">
            <DetailSquadDefender teamId = {teamId} teamList = {teamList} playerList = {playerList}/>
        </div>
        <div className = "mt-[1rem]">
            <DetailSquadMidfielder teamId = {teamId} teamList = {teamList} playerList = {playerList}/>
        </div>
        <div className = "mt-[1rem]">
            <DetailSquadForward teamId = {teamId} teamList = {teamList} playerList = {playerList}/>
        </div>
        <div className = "mt-[3rem] pb-[2rem]">
            <Formation teamList = {teamList} teamId = {teamId} FormationCoordinate = {FormationCoordinate}/>
        </div>
    </div>
  )
}

export default DetailSquad
