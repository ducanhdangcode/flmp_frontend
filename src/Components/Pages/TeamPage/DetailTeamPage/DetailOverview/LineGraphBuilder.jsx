import React, { useEffect } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import WebFont from 'webfontloader'

const LineGraphBuilder = ({marketValue, teamId}) => {
    const data = [
        {year: "2019", value: marketValue?.timeBased[0]},
        {year: "2020", value: marketValue?.timeBased[1]},
        {year: "2021", value: marketValue?.timeBased[2]},
        {year: "2022", value: marketValue?.timeBased[3]},
        {year: "2023", value: marketValue?.timeBased[4]},
        {year: "2024", value: marketValue?.timeBased[5]},
    ]

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Space Grotesk']
          }
        })
      }, [])
  return (
    <div className = "relative top-[7.2rem] left-[2rem]">
      <LineChart width={550} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
        <CartesianGrid strokeDasharray = "2 2" stroke = "blue" strokewidth = {5}/>
        <XAxis dataKey = "year" 
            label = {{
                value: 'Years', 
                position: 'bottom',
                offset: 0, 
                style: {fontWeight: "bold"}
            }}
        />
        <YAxis 
            label = {{
                value: 'Market Value (M€)', 
                angle: -90,
                position: 'left',
                offsetTop: 5,
                style: {fontWeight: "bold"},
            }}
        />
        <Tooltip />
        <Line type = "monotone" dataKey = "value" stroke = "#D91656" strokeWidth = {3}/>
      </LineChart>
      <div className = "relative" style = {{top: "2.6rem", left: "10rem", textAlign: "center", width: "20rem"}}>
        <p className = "font-space-grotesk text-xl font-bold text-[#355F2E]">{`Market value of ${marketValue?.teamName} based on each year`}</p>
      </div>
    </div>
  )
}

export default LineGraphBuilder
