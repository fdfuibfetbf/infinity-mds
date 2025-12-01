import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Crpro = () => {
const h1='CR System'
const p1='We provide a wide range of Computed Radiography (CR) system parts of multiples brands'
 const img='/images/cr.jpeg'
   const h2='Equipment /'
  const p='CR'
     const modality='CR System'
  return (
    <div>
     <Othparts h1={h1} p1={p1} h2={h2} p={p} img={img} modality={modality}/>
    </div>
  )
}

export default Crpro
