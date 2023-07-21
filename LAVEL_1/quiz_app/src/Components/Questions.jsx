import React from 'react'
import Option from './Option'

const Questions = ({question}) => {
    //console.log(question)
  return (
    <>
   <h4>{question.question}</h4>
   <Option question={question}></Option>
 

    </>
  )
}

export default Questions