import React from 'react'

const Data_show = ({post}) => {
    //const{title,body}=props.post
  return (
    <div>
        <h1>External</h1>
      
        {/*recived the props and show them it is call access the props by props.p 

        <h2>{props.p}</h2>
        <h2>{props.b}</h2>} */}
        {/* this is secound way to show data by props first of all recive data to main components by p={post} then reciveing this components by props then distractring the props in line 4 then useing those value  
        <h2>{title}</h2>
        <p>{body}</p>*/}
         <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}

export default Data_show