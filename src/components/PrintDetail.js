import React from 'react';
import './Prints.css';

const PrintDetail = ({ print }) => {

  if (!print) {
    return <div> Loading ... </div>
  }
  return(
    <article>
      {/* <h1>{print.title.rendered}</h1>
      <figure>
        <img src={print.acf.image.sizes.large} />
      </figure> */}
      <p>{print.acf.description}</p>
      </article>
  )
}

export default PrintDetail;