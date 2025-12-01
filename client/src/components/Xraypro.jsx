import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Othparts from './Othparts';

const Xraypro = () => {
  const h1='Digital X-Ray System'
  const p1='We deliver a diverse range of Digital X-Ray system parts of multiple OEMs'
  const img='/images/xray.jpeg'
    const h2='Equipment /'
  const p=' Digital X-Ray'
      const modality='Digital X-Ray'
  return (
    <div>
      <Othparts h1={h1} p1={p1} h2={h2} p={p} img={img} modality={modality} />
    </div>
  )
}

export default Xraypro
