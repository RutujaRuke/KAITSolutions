// src/FAQ.js
import React, { useState } from 'react';
import '../CSS/HomePage.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAndAnswers = [
    {
      question: "01  Planning",
      answer: "Planning for the quality assurance requirements and identification of the risks associated with the project is also done in the planning stage. The outcome of the technical feasibility study is to define the various technical approaches that can be followed to implement the project successfully with minimum risks.In Project development initial phase is the planning."
    },
    {
      question: "02  Design",
      answer: "A design approach clearly defines all the architectural modules of the product along with its communication and data flow representation with the external and third party modules. The internal design of all the modules of the proposed architecture should be clearly defined with the minutest of the details. Students come to know architecture of system."
    },
    {
      question: "03 Implement",
      answer: "Developers must follow the coding guidelines defined by their organization and programming tools like compilers, interpreters, debuggers, etc. are used to generate the code. Different high level programming languages such as C, C++, Pascal, Java and PHP are used for coding. Intelligenency of Coding can easily suit the software developer with any project."
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      {/* <h2>Frequently Asked Questions</h2> */}
      {questionsAndAnswers.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>&#9660;</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
