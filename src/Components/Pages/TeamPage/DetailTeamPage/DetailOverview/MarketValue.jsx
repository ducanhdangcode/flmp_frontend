import React, { useEffect, useState } from 'react'
import { PieChart } from 'recharts'
import WebFont from 'webfontloader'
import PieChartBuilder from './PieChartBuilder'
import LineGraphBuilder from './LineGraphBuilder'
import AOS from 'aos'
import { getMarketValueById } from '../../../../../APIService/MarketValueService'

const MarketValue = ({teamId}) => {
    const [marketValue, setMarketValue] = useState(null);
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Space Grotesk']
            }
        })
    }, [])

    useEffect(() => {
        getMarketValueById(teamId).then(response => {
            setMarketValue(response.data);
        }).catch(err => console.error(err));
    }, []);
  return (
    <div className = "absolute w-full" style = {{top: "137.5rem"}}>
        <div className = "bg-hardGreen w-full relative left-[0rem]">
            <p className = "text-[25px] font-teko font-bold relative text-[white] left-[2rem] py-[0.4rem] top-[0.2rem]">MARKET VALUE</p>
        </div>
        <div className = "flex relative">
            <div className = "bg-easeGreen w-[18rem] h-[37.6rem]">
                <p className = "text-5xl font-space-grotesk font-bold relative left-[4.5rem] top-[12rem]">TOTAL</p>
                <p className = "font-space-grotesk font-bold relative left-[1.5rem] top-[12rem]" style = {{fontSize: "3rem"}}>{marketValue?.total}</p>
            </div>
            <div className = "absolute left-[18rem] bg-easeWhite w-[37.6rem]" style = {{borderRight: "1px solid green"}}>
                <PieChartBuilder marketValue={marketValue} teamId = {teamId}/>
            </div>
            <div className = "absolute left-[55.6rem] bg-easeGreen w-[40rem] h-[37.6rem]">
                <LineGraphBuilder marketValue = {marketValue} teamId = {teamId}/>
            </div>
        </div>
    </div>
  )
}

export default MarketValue
