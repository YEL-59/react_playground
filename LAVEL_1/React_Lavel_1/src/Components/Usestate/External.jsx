import React, { useEffect, useState } from 'react'
import Data_show from './Data_Show/Data_show'

const External = () => {
    //declare state for store data

    const [Data, setData] = useState([])

    //useEffect for fetch data from api
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setData(data))
    }, [])
  return (
    <>
    <div>External</div>

    <p>{Data.length}</p>
    {
        Data.map((post)=>{
            return(
            //    { // this is the way to pass data to child component(easy way)all data are pass in props by p and b where p is title and b is body
            //     <Data_show key={post.id} p={post.title} b={post.body}></Data_show>}

            <Data_show key={post.id} post={post}></Data_show>
            )

        })
    }

</>

  )
}

export default External