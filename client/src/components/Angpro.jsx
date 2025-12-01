import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Angpro = () => {
  const h1='Angiography System'
  const p1='We provide comprehensive parts coverage for multiple manufacturers of Angiography system'
  
  const img='/images/angio.jpeg'
    const h2='Equipment /'
  const p=' Angiography'
    const modality='Angiography'
  return (
    <div>
      <Othparts h1={h1} p1={p1} h2={h2} p={p}  img={img} modality={modality}/>
    </div>
  )
}

export default Angpro
