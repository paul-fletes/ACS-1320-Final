import React from "react";
import './Band.css';
import Counter from "../Counter/Counter";

const Band = (props) => {
  const { Band_name, origin, fans, formed, split, styles } = props;
  let numFans = parseInt(fans) * 1000;
  numFans = numFans.toLocaleString('en');
  const bandStyle = styles.split(',').map((item, index) => {
    return <li key={index}>{item}</li>
  });

  return (
    <div className="Band">
      <h1>{Band_name}</h1>
      <div className="bandInfo">
        <p><strong>Origin:</strong> {origin}</p>
        <p><strong>Fans:</strong> {numFans}</p>
        <p><strong>Formed:</strong> {formed}</p>
        <p><strong>Split:</strong> {split}</p>
      </div>
      <p>{styles}</p>
      <div className="styleList">
        <ul className="bandStyle">{bandStyle}</ul>
      </div>
      <div className="likeCounter">
        {split === '-' ? <Counter /> : null}
      </div>
    </div>
  )
};

export default Band;