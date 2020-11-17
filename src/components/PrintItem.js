import React, { useState } from 'react';
import './Prints.css';

const PrintItem = ({ print }) => {
  const [selectedPrint, setSelectedPrint] = useState(null)

  return (
    <article className="print-item" key={print.id} onClick={() => setSelectedPrint(print)}>
    <a href={print.acf.link ? print.acf.link : null}><figure className="print-item__thumbnail">
      <img src={print.acf.image.sizes.large} />
    </figure>
    <p className="print-item__description">
    {print.acf.description}</p>
    </a>
  </article>
  )
}

export default PrintItem;