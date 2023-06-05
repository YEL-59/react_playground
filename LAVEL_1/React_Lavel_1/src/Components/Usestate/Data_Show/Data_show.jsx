import React, { useState } from 'react'

const Data_show = ({person}) => {
    //const{title,body}=props.post
const [point, setPoint]=useState(0)

    const handelClick=(id)=>{
      //e.preventDefault()
      const newPoint=parseInt(localStorage.getItem("data"+id)?? 0)+1
      localStorage.setItem("data"+id,newPoint)

      setPoint(newPoint) 
    
   

    }
  return (
    <div>
      
      
        {/*recived the props and show them it is call access the props by props.p 

        <h2>{props.p}</h2>
        <h2>{props.b}</h2>} */}
        {/* this is secound way to show data by props first of all recive data to main components by p={post} then reciveing this components by props then distractring the props in line 4 then useing those value  
        <h2>{title}</h2>
        <p>{body}</p>*/}
         <h2>{person.price}</h2>
        <p>{person.genre}</p>
        <p>{person.publicationYear}</p>
        <p>{person.publisher.location}</p>
        <p>{person.publisher.name}</p>
        <p>{person.reviews[0]?.user}</p>
        <p>{person.reviews[0]?.comment}</p>
        <p>i am clicking: {localStorage.getItem("data"+person.id) ?? 0} </p>
        <button onClick={()=>handelClick(person.id)}>ok</button>
    </div>
  )
}

export default Data_show