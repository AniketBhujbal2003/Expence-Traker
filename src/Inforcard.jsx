import React from 'react'
import './Infocard.css'

let isIncome = Math.round(Math.random());

const Inforcard = () => {
  return (
    <div className='Infocard'>
         
         Try Saying: 
           Add {isIncome ? 'Income ': 'Expence '}
          for {isIncome ? '100 ': '50 '}
          in Category {isIncome ? 'Business ': 'House '}
          for next {isIncome ? 'Monday ': 'Tuesday '}
    </div>
  )
}

export default Inforcard