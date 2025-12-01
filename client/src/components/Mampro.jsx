import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Mampro = () => {
   const h1='Mammography System'
  const p1='We supply a diverse range of Mammography system parts of various brands'
  const img='/images/h1.jpeg'
   const h2='Equipment /'
  const p=' Mammography'
   const   modality="Mammography"
  return (
    <div>
    <Othparts h1={h1} p1={p1}  h2={h2} p={p}  img={img} modality={modality} />
    </div>
  )
}

export default Mampro
