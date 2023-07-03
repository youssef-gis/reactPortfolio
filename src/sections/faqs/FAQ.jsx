import React from 'react'
import Card from './../../components/Cards';
import {AiOutlinePlus,AiOutlineMinus } from "react-icons/ai"

const FAQ = ({faq}) => {
    const [showAnswer, setShowAnswer] = React.useState(false)
  return (
    <Card className="faq" onclick={()=>setShowAnswer((ans)=>!ans)}  >
        <div>
            <h5 className='faq__question' >{faq.question}</h5>
            <button className='faq__icon' >{showAnswer ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </div>
        {
            showAnswer && <p className='faq__answer' >{faq.answer}</p>
        }

    </Card>
  )
}

export default FAQ