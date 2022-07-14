import React from "react";
import { Upload_Style } from "../../Style/Upload_Style";

const Upload = () => {
  const datas = [{ title: "제목", layout: <div></div> }];

  return (
    <Upload_Style>
      <input type="text" placeholder="제목을 입력해주세요." />
      <input type="text" placeholder="노래 원곡제목을 입력해주세요." />
      <input type="text" placeholder="이메일을 입력해주세요."></input>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="이 컨텐츠에대해 설명해주세요."
      ></textarea>
      <button>파일업로드</button>
      <button>댓글유무 on</button>
      <div>캐릭터를 선택해주세요</div>
    </Upload_Style>
  );
};

export default Upload;
