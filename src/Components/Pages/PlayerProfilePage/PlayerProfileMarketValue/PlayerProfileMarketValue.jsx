import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const PlayerProfileMarketValue = ({player}) => {
    const CustomDotImg = (props) => {
        const {cx, cy, payload} = props;
        if (!cx || !cy) return null;
        return (
            <foreignObject x = {cx-12} y={cy-12} width="30" height="30">
                <img src = {payload.clubLogoLink} alt = "" width="24" height="24" style={{  }}/> 
            </foreignObject>
        )
    }

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          const { date, marketValueDisplay, clubName, clubLogoLink, age } = payload[0].payload;
          return (
            <div className="p-3 bg-white border rounded-lg shadow-md text-black">
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Club:</strong> {clubName}</p>
              <p><strong>Market Value:</strong> {marketValueDisplay}</p>
              <p><strong>Age:</strong> {age}</p>
            </div>
          );
        }
        return null;
    };
  return (
    <div className = "relative left-[2rem] mt-[1.5rem]">
        {/* header */}
        <div className = "w-[93%] bg-hardGreen text-center">
            <p className = "font-teko text-2xl text-white font-bold py-[0.3rem] relative top-[0.1rem]">Market Value Over Time</p>
        </div>

        {/* current market value */}
        <div className = "absolute left-[38%] top-[3.5rem]">
            <p className = "font-teko text-xl font-bold">{`Current Market Value: ${player?.marketValue}`}</p>
        </div>

        {/* line chart */}
        <div className = "mt-[1.5rem]">
            <ResponsiveContainer width={"93%"} height={500}>
                <LineChart data = {player?.personalMarketValues} margin = {{right: 20, bottom: 20, left: 20, top: 20}}>
                    <CartesianGrid strokeDasharray="1 1" stroke = "#27391C"/>
                    <XAxis 
                        dataKey={"date"}
                        tick = {{dy: 20}}
                    />
                    <YAxis 
                        tickFormatter={value => `${value}M`}
                        tick = {{dx: -15}}
                    />
                    <Tooltip 
                        content={<CustomTooltip />}
                    />
                    <Line
                        type="monotone"
                        dataKey="marketValue"
                        stroke="#1F7D53"
                        strokeWidth={4}
                        dot= {<CustomDotImg />}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default PlayerProfileMarketValue
