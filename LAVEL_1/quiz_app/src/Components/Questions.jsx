import React from 'react'
import Option from './Option'

const Questions = ({question ,dispatch,answer}) => {
    //console.log(question)
  return (
    <>
   <h4>{question.question}</h4>
   <Option question={question} dispatch={dispatch} answer={answer}></Option>
 

    </>
  )
}

export default Questions