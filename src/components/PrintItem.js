import React from 'react';

const PrintItem = ({ print, onPrintSelect }) => {
  return (
    <article key={print.id} onClick={() => onPrintSelect(print)}>
    <h2> {print.title.rendered} </h2>
    <figure>
      <img src={print.acf.image.sizes.medium} />
    </figure>
  </article>
  )
}

export default PrintItem;