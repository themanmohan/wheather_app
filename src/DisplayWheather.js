import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import  './SeasonDisplay.css'
const getSeason=(lat,month)=>{
  if(month>2 && month<9){
      return lat>0?'summer':'winter'
  }else{
      return lat>0?'winter':'summer'
  }
}

const seasonConfig={
    winter:{
        text: "Ohh Too Cold",
        iconName:"snowflake"
    },
    summer: {
        text: "let Climb the Beach",
        iconName: "sun"
    }
}

export default function DisplayWheather({lat}) {

    const  season =getSeason(lat,new Date().getMonth())
   const {text,iconName}=seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
         <i className={`icon-left massive ${iconName} icon`} />
         <i className={` icon-left1 massive ${iconName} icon`} />
          <h1>{text}</h1>
           <i className = {`icon-right massive ${iconName} icon`
           }
           />
           <i className={`icon-right1 massive ${iconName} icon`} />
        </div>
    )
}
