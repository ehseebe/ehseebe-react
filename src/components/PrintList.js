import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrintItem from './PrintItem';
import PrintDetail from './PrintDetail';

const PrintList = () => {
  const [prints, setPrints] = useState([]);
  const [selectedPrint, setSelectedPrint] = useState(null)

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
      onPrintSelect={setSelectedPrint}
      key={print.id}
      />
    )
  })

  // console.log("prints in PrintList", prints)
  return (
    <>
    {renderedList}
    <PrintDetail print={selectedPrint} />
    </>
  )
}

export default PrintList;