import React, { useState } from 'react'

function AccordionItem({faq, num}) {
    const [isFaqOpen, setIsFaqOpen] = useState(false)
  return (
    <div className={`${isFaqOpen ? 'open' : "" } item`} onClick={() => setIsFaqOpen((isFaqOpen) => !isFaqOpen)}>
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="title">{faq.title}</p>
        <p className='icon'>{isFaqOpen ? "-" : "+"}</p>
        {isFaqOpen && (<div className='content-box'>{faq.text}</div>)}

    </div>
  )
}

export default AccordionItem