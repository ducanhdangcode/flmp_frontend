import React from 'react'

const GoalkeeperTableStat = () => {
  return (
    <div>
      <table>
        <thead>
            <tr className = "flex">
                <th className = "px-[4.025vw] bg-gray-400 ">Competitions</th>
                <th className = "flex bg-gray-400 px-[4.025vw]">
                    <p>Appearances</p>
                </th>
                <th className = "flex px-[4.025vw] bg-gray-400 ">
                    <p>Saves</p>
                </th>
                <th className = "flex px-[4.025vw] bg-gray-400 ">
                    <p>Clean sheets</p>
                </th>
                <th className = "flex px-[4.025vw] bg-gray-400 ">
                    <p>Yellow cards</p>
                </th>
                <th className = "flex px-[4.025vw] bg-gray-400">
                    <p>Red cards</p>
                </th>
                <th className = "flex px-[4.025vw] bg-gray-400">
                    <p>Minute played</p>
                </th>
            </tr>
        </thead>
      </table>
    </div>
  )
}

export default GoalkeeperTableStat
