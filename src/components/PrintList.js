import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PrintList = () => {
  const [prints, setPrints] = useState([]);

  useEffect(() => {
    const getPrints = async () => {
      const response = await axios.get("http://localhost:10013/wp-json/wp/v2/print")
      setPrints(response.data)
    }
    getPrints();
  }, [])

  console.log(prints)

  const renderedList = prints.map(print => {
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
  })

  console.log("prints in PrintList", prints)
  return (
    <>
    {renderedList}
    </>
  )
}

export default PrintList;