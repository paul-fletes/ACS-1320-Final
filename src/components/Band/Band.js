import React from "react";
import './Band.css';
import Counter from "../Counter/Counter";

const Band = (props) => {
  const { Band_name, origin, fans, formed, split, styles } = props
  return (
    <div className="Band">
      <h1>{Band_name}</h1>
      <div className="bandInfo">
        <p><strong>Origin:</strong> {origin}</p>
        <p><strong>Fans:</strong> {fans * 1000}</p>
        <p><strong>Formed:</strong> {formed}</p>
        <p><strong>Split:</strong> {split}</p>
      </div>
      <p>{styles}</p>
      <div className="styleList">
        <p>insert bullet style list here</p>
      </div>
      <div className="likeCounter">
        <Counter />
      </div>
    </div>
  )
};

export default Band;