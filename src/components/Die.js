import React from "react"

export default function Die(props){
    // console.log(props.id);
   const styles = {
     backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
   }

   return(
     <div className="die" style={styles} onClick={()=>props.holdDice(props.id)}>
        <h1>{props.value}</h1>
     </div>
   )
}