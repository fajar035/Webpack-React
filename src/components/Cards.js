import React from "react";
import { Link } from "react-router-dom";

import "../styles/card.css";

function Cards({ data, id }) {
  return (
    <div className="card">
      <p className="text-title">{data.title}</p>
      <p className="text-data">{data.opening_crawl}</p>
      <Link to={`/${id}`}>
        <div className="btn-detail">
          <span>Go Detail</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
