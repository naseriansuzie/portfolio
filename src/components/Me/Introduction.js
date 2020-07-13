import React from "react";
import photo from "../../images/victor.jpg";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="greeting-sentence">
          <p className="greeting">안녕하세요!</p>
          <p className="greeting">영어교육 콘텐츠 크리에이터, 김승수입니다.</p>
        </div>
        <img src={photo} alt="Seungsu Kim" />
        <div className="detail-sentence">
          <p className="font18">
            영화, 만화, 보드게임 등 여러 콘텐트에 관심을 가지고 리뷰하는 것을
            좋아합니다.
          </p>
          <p className="font18">
            기존 학습 자료로 사용하지 않던 새로운 콘텐트를 영어 교육에 접목하는
            시도를 해왔습니다.
          </p>
          <p className="font18">
            다양한 학습 콘텐트를 통해 학습자와 교수자의 경계가 무너진, 스스로
            학습할 수 있는 커리큘럼을 지속적으로 만들어 나가고 싶습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
