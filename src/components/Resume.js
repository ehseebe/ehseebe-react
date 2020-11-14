import React from 'react';
import PDF from './alyssa-beaton-tanguay-cv.pdf';

const Resume = () => {
  return (
    <embed
    src={PDF + "#toolbar=0"}
    type="application/pdf"
    height={650}
    width={500}
  />
  )
}

export default Resume;