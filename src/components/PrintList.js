import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrintItem from './PrintItem';
import './Prints.css';

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
      <PrintItem
      print={print}
      key={print.id}
      />
    )
  })

  return (
    <section className="prints fade-in">
    {renderedList}
    </section>
  )
}

export default PrintList;