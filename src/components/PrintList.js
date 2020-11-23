import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrintItem from './PrintItem';
import './Prints.css';

const PrintList = () => {
  const [prints, setPrints] = useState([]);

  useEffect(() => {
    const getPrints = async () => {
      const response = await axios.get("https://ehseebe.ca/wp-json/wp/v2/print")
      setPrints(response.data)
    }
    getPrints();
  }, [])

  const renderedList = prints.map(print => {
    return (
      <PrintItem
      print={print}
      key={print.id}
      />
    )
  })

  return (
    <main>
    <section className="prints fade-in">
    {renderedList}
    </section>
    </main>
  )
}

export default PrintList;