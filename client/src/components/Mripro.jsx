import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Mripro = () => {
  const h1='MRI System'
  const p1='We provide a wide range of MRI system parts of various manufacturers'
  const img='/images/mrii.jpeg'
   const h2='Equipment /'
  const p='MRI'
    const modality='MRI'
  return (
    <div>
       <Othparts h1={h1} p1={p1} h2={h2} p={p}   img={img} modality={modality}/>
    </div>
  )
}

export default Mripro
