import React, { useState } from 'react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'Who is mahesh ?',
    answer: 'Mahesh is owner of motherfarm company..'
  },
  {
    id: 2,
    question: 'What is motherfarm?',
    answer: 'Mother farm is a pulses & spices company of india.'
  },
  {
    id: 3,
    question: 'What is peanut butter ?',
    answer: 'Peanut butter is a spread made from ground, roasted peanuts, often mixed with salt, sugar, or oil for flavor and texture.'
  },
  {
    id: 4,
    question: 'Do you have a refund policy?',
    answer: 'Yes, we have a 100% money back guarantee. If you are not satisfied with Motherfarm, please create a support ticket and we will get you full refund. No question asked.'
  },
  {
    id: 5,
    question: "What's the standard reply time for support?",
    answer: "Usually we reply within an hour if it's working hours. If not, it may be delayed up to 10 hours maximum."
  }
];

export const FaqAccordionSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion-container">
      <div className="accordion">
        <h2 className="mb-3 text-center" style={{ fontFamily: "'Georgia', serif", fontWeight: 'bold' }}>
          Frequently asked questions
        </h2>
        <br />
        {faqs.map((faq) => {
          const isOpen = openIndex === faq.id;
          return (
            <div key={faq.id} className={`accordion-item ${isOpen ? 'active' : ''}`}>
              <header onClick={() => toggleAccordion(faq.id)}>
                <span>{faq.question}</span>
                <i className="arrow">{isOpen ? '×' : '+'}</i>
              </header>
              <div
                className="content"
                style={{
                  maxHeight: isOpen ? '200px' : '0',
                  padding: isOpen ? '0 24px 20px 24px' : '0 24px'
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
