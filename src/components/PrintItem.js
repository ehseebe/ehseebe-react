import React, { useState } from 'react';
import './Prints.css';

const PrintItem = ({ print }) => {
  const [selectedPrint, setSelectedPrint] = useState(null)

  return (
    <article className="print-item" key={print.id} onClick={() => setSelectedPrint(print)}>
    <figure className="print-item__thumbnail">
      <img src={print.acf.image.sizes.large} />
    </figure>
    <p className="print-item__description">
    {print.acf.description}</p>
  </article>
  )
}

export default PrintItem;