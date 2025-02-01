import React, { useEffect, useState } from 'react'
import { Cell, Pie, PieChart, Tooltip} from 'recharts';
import WebFont from 'webfontloader';

const PieChartBuilder = ({marketValue, teamId}) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const data = [
        {position: 'Goalkeeper', value: marketValue?.positionBased[0]},
        {position: 'Defender', value: marketValue?.positionBased[1]},
        {position: 'Midfielder', value: marketValue?.positionBased[2]},
        {position: 'Attacker', value: marketValue?.positionBased[3]}
    ];
    const COLORS = ['#0088FE', '#00C49F', '#f7220a', '#FF8042'];

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    }

    const formatCurrency = (value) => `€${value.toLocaleString()}`;

    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Space Grotesk']
        }
      })
    }, [])
    const leftPositions = [7.5,4,7.5,7.5,5,5.5,4,4,5.5,3,7,6,8,5.5,6,6,6,6,3.5,7.5]
  return (
    <div className = "relative top-[-4rem]">
      <PieChart width = {600} height = {600}>
        <Pie
          activeIndex = {activeIndex}
          data = {data}
          dataKey = "value"
          nameKey = "position"
          outerRadius={150}
          fill = "green"
          onMouseEnter = {onPieEnter}
          style={{ cursor: 'pointer', outline: 'none', fontWeight: "", fontSize: "0.8rem"}}
          label = {({position, value}) => `${position}: ${formatCurrency(value)}`}
        >
          {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter = {(value) => formatCurrency(value)}/>
      </PieChart>
      <div className = "relative" style = {{bottom: "5rem", left: "9rem", width: "20rem", textAlign: "center"}}>
        <p className = "font-space-grotesk text-xl font-bold text-[#355F2E]">{`Market value of ${marketValue?.teamName} based on each position`}</p>
      </div>
    </div>
  )
}

export default  PieChartBuilder;
