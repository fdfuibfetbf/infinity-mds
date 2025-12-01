import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'

import Othparts from './Othparts';

const Fluopro = () => {
  const h1='Fluoroscopy System'
  const p1='We deliver a wide array of Fluoroscopy system parts of multiple OEMs'
  const img='/images/fluro.jpeg'
   const h2='Equipment /'
  const p=' Fluoroscopy'
     const   modality="Fluoroscopy"
  return (
    <div>
      <Othparts h1={h1} p1={p1} h2={h2} p={p}  img={img} modality={modality} />
    </div>
  )
}

export default Fluopro
