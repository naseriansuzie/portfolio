import React from "react";
import photo from "../../images/sooji_england.png";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="greeting-sentence">
          <p className="greeting">안녕하세요!</p>
          <p className="greeting">프런트엔드 엔지니어 김수지입니다.</p>
        </div>
        <img src={photo} alt="Sooji Kim" />
        <div className="detail-sentence">
          <p className="font18">
            사람들이 마주한 문제를 정의하고 해결하는 과정에서 성장하는 것을
            즐깁니다.
          </p>
          <p className="font18">
            꾸준히 성장하여 사회적 가치를 만드는 개발자가 되고 싶습니다.
          </p>
          <p className="font18">
            사용자 경험 개선에 관심이 있고, Lean startup MVP 출시 경험으로
            프로젝트 주기를 잘 이해합니다. 함께 일할 때는 활발한 교류를 통해
            가장 합리적인 방법을 도출해냅니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
