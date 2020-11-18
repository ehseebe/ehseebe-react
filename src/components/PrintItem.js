import React from 'react';
import './Prints.css';

const PrintItem = ({ print }) => {

  return (
    <article className="print-item" key={print.id}>
    <a href={print.acf.link ? print.acf.link : null}><figure className="print-item__thumbnail">
      <img src={print.acf.image.sizes.large} alt={print.acf.description}/>
    </figure>
    <p className="print-item__description">
    {print.acf.description}</p>
    </a>
  </article>
  )
}

export default PrintItem;