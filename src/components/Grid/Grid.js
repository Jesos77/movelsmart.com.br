import React, { useState } from "react";
import { portfolio } from "../../data/PortfolioData";
import "./Grid.css";

export const Grid = () => {
  const [list] = useState(portfolio);

  return (
    <article>
    <div className="grid-container">
      <div className="grid-header">
        <h1>Portfolio</h1>
        <p>Veja nossos trabalhos mais recentes</p>
      </div>
        <div className="content grid3">
          {list.map((item) => (
            <div className="box" data-aos="fade-up">
              <div className="img">
                <img src={item.cover} alt="" />
              </div>
            </div>
          ))}
        </div>
    </div>
    </article>
  );
};

export default Grid;
