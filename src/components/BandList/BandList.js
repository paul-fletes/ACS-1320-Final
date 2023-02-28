import React from "react";
import './BandList.css';
import Band from '../Band/Band'
import data from '../../metal.json'

const BandList = () => {
  const bands = data.map((obj) => {
    return (
      <Band
        Band_name={obj.band_name}
        origin={obj.origin}
        fans={obj.fans}
        formed={obj.formed}
        split={obj.split}
        styles={obj.style}
      />
    )
  })

  return (
    <div className="BandList">
      {bands}
    </div>
  )
};




export default BandList;