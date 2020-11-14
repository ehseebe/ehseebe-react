import React from 'react';

const PrintItem = ({ print, onPrintSelect }) => {
  return (
    <article key={print.id}>
    <h2> {print.title.rendered} </h2>
    <figure>
      <img src={print.acf.image.sizes.medium} />
    </figure>
    {/* <p className="print-content">
      {print.acf.description}
    </p> */}
  </article>
  )
}

export default PrintItem;