import React from 'react'

const Option = ({ question,dispatch,answer}) => {
  
  return (
    <>
  <div className='options'>  {
       question.options.map((option,index) => (

        <button className={`btn btn-option ${index===answer ?"answer":""} ${index=== question.correctOption ? "correct":"wrong"}`} key={option}
onClick={()=>dispatch({type:'newAnswer',payload:index})}
        
        
        >{option}</button>
       ))
    }</div>
    </>

)
  }
export default Option