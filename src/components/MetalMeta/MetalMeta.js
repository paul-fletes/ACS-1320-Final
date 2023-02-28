import React from "react";
import './MetalMeta.css';
import data from '../../metal.json'

const MetalMeta = () => {
  const numBands = data.length
  return <p>Total Bands: {numBands}</p>
};

export default MetalMeta;