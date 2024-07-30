import React, { useState } from "react";

function AccordionItem({ faq, num, isFaqOpen, setIsFaqOpen }) {
  // const [isFaqOpen, setIsFaqOpen] = useState(false); this is for Open one faq at a time
  const isOpen = num === isFaqOpen;
  const handleClick = () => {
    setIsFaqOpen(num);
  };

  return (
    // this div is when Accordion Items have Control on State
    // <div className={`${isFaqOpen ? 'open' : "" } item`} onClick={() => setIsFaqOpen((isFaqOpen) => !isFaqOpen)}>
    //     <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
    //     <p className="title">{faq.title}</p>
    //     <p className='icon'>{isFaqOpen ? "-" : "+"}</p>
    //     {isFaqOpen && (<div className='content-box'>{faq.text}</div>)}

    // </div>
    <div className={`${isOpen ? "open" : ""} item`} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{faq.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{faq.text}</div>}
    </div>
  );
}

export default AccordionItem;
