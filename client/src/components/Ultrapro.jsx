import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Ultrapro = () => {
  const h1='Ultrasound System'
  const p1='We offer a comprehensive range of Ultrasound system parts of different manufacturers'
  const img='/images/ultr.jpeg'
    const h2='Equipment /'
  const p=' Ultrasound'
    const modality='Ultrasound'
  return (
    <div>
     <Othparts h1={h1} p1={p1}  h2={h2} p={p}  img={img} modality={modality}/>
    </div>
  )
}

export default Ultrapro
