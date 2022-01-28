import React, { useState } from 'react';
import {accordionData} from './api/data'
// import MyAccordion from './MyAccordion';
import DiabloAccordion from '../components/diabloAccordion';

const Faq = () => {
  const [data, setData] = useState(accordionData);
  return (
    <>
    <section >
    <h1 className="flex flex-col items-center justify-center text-orange-500 text-5xl font-bold">Frequently Asked Questions</h1>
    {
       data.map((curElem) => {
         const { id } = curElem;
         return <DiabloAccordion key={ id} { ...curElem }/>
       })
     }
     </section>
    </>
  );
};

export default Faq;
