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

const DetailOverview = ({teamId, teamVideoTitles, teamKits, teamChairman, team}) => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu', 'Roboto Condensed'],
            }
        })
    }, [])
  return (
    <>
        <div className = "w-full block" style = {{backgroundColor: "white", height: "161rem", borderTop: "2px solid gray"}}>
            <div>
                <TeamVideo teamId={teamId} team={team} teamVideoTitles={teamVideoTitles}/>
            </div>
            <div className = "absolute z-0 bg-greenFootball" style = {{width: "25.4rem", height: "56rem", top: "23.1rem", right: "0.3rem"}}></div>
            <div className = "relative bottom-[0.1rem]">
                <Trophies teamId = {teamId} team={team}/>
            </div>
            <div>
                <Stadium teamId = {teamId} team={team}/>
            </div>
            <div>
                <Kit teamId={teamId} team={team} teamKits = {teamKits}/>
            </div>
            <div>
                <Chairman teamId={teamId} team={team} teamChairman={teamChairman} />
            </div>
            <div>
                <MarketValue team = {team} teamId = {teamId}/>
            </div>
        </div>
    </>
    )
}

export default DetailOverview
