import React from "react";

export default function ReviewType({ title, names, values }) {
  return (
    <div className="review-type">
      <p className="review-type text">{title}</p>

      {names &&
        names.map((name, idx) => (
          <div className="bar-metadata">
            <span className="bar-text1">{name}</span>
            <div className="bar-bg">
              <div
                className="bar-value"
                style={{ width: `${values[idx]}%` }}
              ></div>
            </div>
            <span className="bar-text2">{values[idx]}%</span>
          </div>
        ))}
    </div>
  );
}
