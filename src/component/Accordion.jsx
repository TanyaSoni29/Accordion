import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion() {
    // this state is for Controlling Faq Open At A Time
  const [isFaqOpen, setIsFaqOpen] = useState(null);
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem
          num={i}
          faq={faq}
          key={i}
          isFaqOpen={isFaqOpen}
          setIsFaqOpen={setIsFaqOpen}
        />
        
      ))}
    </div>
  );
}

// here Accordion Item are controlling the State is open but now we want to open at a time for that we have to put that state in Parent Component who will be know that who will be open and who will be close

export default Accordion;

/*text As A Children prop*/
        /* <AccordionItem
          num={i}
          title={faq.title}
         
          key={i}
          isFaqOpen={isFaqOpen}
          setIsFaqOpen={setIsFaqOpen}
        > {faq.text} </Accordion> */
         /* <AccordionItem
          num={i}
          title={faq.title}
         
          key={i}
          isFaqOpen={isFaqOpen}
          setIsFaqOpen={setIsFaqOpen}
        > <p>Hello</p>
        <ul><li>Hello1</li><li>Hello2</li><li>Hello3</li></ul> </Accordion> */

