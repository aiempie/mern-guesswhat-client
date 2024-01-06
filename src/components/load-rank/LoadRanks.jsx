import React from "react";
import RankSelect from "../rank-select/RankSelect";
import "./LoadRanks.scss";

function LoadRanks({ ranks, setSelect, select }) {
  const selectRank = (e) => {
    if (e === select) {
      setSelect(0);
    } else {
      setSelect(e);
    }
  };
  return (
    <div>
      <div className="ranks">
        <div className="ranks_container">
          {ranks.map((item, index) => {
            return (
              <div
                className="rank_card_wrapper"
                onClick={() => selectRank(item.rankLevel)}
                key={index}
              >
                <RankSelect rank={item} isSelect={select} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LoadRanks;
