import React from 'react'
import Parts from './Parts';
import { Link } from 'react-router-dom'
import Sign from './Sign';

const Allpro = () => {
 
  const h1='Medical Imaging Parts '
  const p1='Explore our wide range of parts, we will assist you in finding the ideal used part for your Equipment'
 
const img='/images/home1.jpeg'
const p=' High Quality Parts for every Medical Imaging System'
const partStyle = {
 marginLeft:'10px',
  color: 'black',              // text color: black
  fontSize: '2rem',      // roughly text-xl (20px)
  fontWeight: '700',          // medium weight for a clean look
  textAlign: 'left',          
};

   
//console.log("Part being passed to Sign:", part);

  return (
    <div>
      <Parts h1={h1} p1={p1} img={img} p={p} style={partStyle} />
      
    </div>
  )
}

export default Allpro
