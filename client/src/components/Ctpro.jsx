import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Ctpro = () => {
const h1='CT Scan System'
const p1='We supply a comprehensive range of CT Scan system parts of different brands'
const img='/images/ctscan.jpg'
  const h2='Equipment /'
  const p='CT Scan'
   const modality='CT Scan'
  return (
    <div>
        <Othparts h1={h1} p1={p1}  h2={h2} p={p}  img={img}  modality={modality} />
    </div>
  )
}

export default Ctpro
