import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Gampro = () => {
  const h1='Gamma Camera System'
  const p1='We supply a wide variety of parts for Gamma Camera system of various brands'
  const img='/images/gam.jpeg'
    const h2='Equipment /'
  const p=' Gamma Camera'
    const modality='Gamma Camera'
  return (
    <div>
   <Othparts h1={h1} p1={p1}  h2={h2} p={p}  img={img} modality={modality} />
    </div>
  )
}

export default Gampro
