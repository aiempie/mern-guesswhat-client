import React from "react";
import "./RankSelect.scss";

function RankSelect({ rank, isSelect }) {
  return (
    <>
      <div className={`rank_card ${isSelect === rank.rankLevel ? "selected" : ""}`}>
        <img className={"rank_img"} src={rank.image} alt={rank.rankName} />
      </div>
      {isSelect === rank.rankLevel ? <span className={"rank_title"}>{rank.rankName}</span> : ""}
    </>
  );
}

export default RankSelect;
