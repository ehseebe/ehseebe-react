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

  console.log("prints in PrintList", prints)
  return (
    <>
    PrintList
    </>
  )
}

export default PrintList;