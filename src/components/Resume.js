import React from 'react';
import PDF from './alyssabt-resume.pdf';

const Resume = () => {
  return (
    <iframe className="ui-embed"
    src={PDF + "#toolbar=0"}
    type="application/pdf"
    height={650}
    width={500}
  />
  )
}

export default Resume;