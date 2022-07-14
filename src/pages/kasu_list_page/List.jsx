import React from "react";
import { List_Style } from "../../Style/List_style";
import { characters_array } from "./data";

const List = () => {
  return (
    <List_Style>
      <div className="lists">
        <span>
          {" "}
          오늘의 랭킹 | 주간 랭킹 | 월간 랭킹 | 새로운가수 | 장르별 분류
        </span>
        {characters_array.map((data, index) => (
          <div className="list" key={index}>
            <div className="face">
              <img src={data} alt="" />
            </div>
            <div className="name">홍길동{index}</div>
            <div className="name">노래제목~~(이수)</div>
            <div className="name">재생</div>
            <div className="name">정지</div>
            <div className="name">좋아요</div>
          </div>
        ))}
      </div>
    </List_Style>
  );
};

export default List;
