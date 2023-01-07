import React from 'react'
import "./DataDisplay.css"

const Datadisplay = ({items}) => {
  return (
    <div style={{backgroundColor:"cyan"}}>
      {items.map((ele) => {
                    return (
                        <div className='tileContainer' key={ele.id}>
                            <img src={ele.images.small} alt="images"/>
                            <div className='names'>
                            <h3>{ele.name}</h3>
                            <div className='name'>
                            <h3>HP:{ele.hp}</h3>
                            </div>
                            </div>
                            <h4>Attacks:</h4>{ele.attacks[0].name}
                            <h4>Abilities:</h4>N/A
                        </div>
                    )
                })}
    </div>
  )
}

export default Datadisplay
