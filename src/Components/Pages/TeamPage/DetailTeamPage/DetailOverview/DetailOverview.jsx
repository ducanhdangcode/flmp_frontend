import React, { useEffect, useState } from 'react'
import WebFont from 'webfontloader';
import { ListTeams, UpdateTeam } from '../../../../../APIService/TeamService';
import { FaStar } from 'react-icons/fa6';

import Stadium from './Stadium';
import Kit from './Kit';
import Chairman from './Chairman';
import Trophies from './Trophies';
import TeamVideo from './TeamVideo';
import { listUsers, updateUser } from '../../../../../APIService/UserService.';
import MarketValue from './MarketValue';

const DetailOverview = ({teamId, teamVideoTitles, teamKits, teamChairman, teamList}) => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu', 'Roboto Condensed'],
            }
        })
    }, [])
  return (
    <>
        <div className = "w-full" style = {{backgroundColor: "white", height: "157rem", borderTop: "2px solid gray"}}>
            <TeamVideo teamId={teamId} teamList={teamList} teamVideoTitles={teamVideoTitles}/>
            <div className = "absolute z-0" style = {{width: "25.4rem", height: "56rem", top: "23.1rem", right: "0.3rem", backgroundColor: "#6d6f70"}}></div>
            <Trophies teamId = {teamId} teamList={teamList}/>
            <Stadium teamId = {teamId} teamList={teamList}/>
            <Kit teamId={teamId} teamList={teamList} teamKits = {teamKits}/>
            <Chairman teamId={teamId} teamList={teamList} teamChairman={teamChairman} />
            <MarketValue teamList = {teamList} teamId = {teamId}/>
        </div>
    </>
    )
}

export default DetailOverview
