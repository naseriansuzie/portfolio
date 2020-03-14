import React from "react";
import { FaPaperclip, FaGithub, FaBlogger, FaMobileAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-box">
        <a
          className="resume-link"
          href="https://drive.google.com/file/d/19e4PKjY-jtd7Un-YcYSEWwsvYa27fGmy/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPaperclip />
          Resume
        </a>
        <a
          className="resume-link"
          href="https://github.com/naseriansuzie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
          Github
        </a>
        <a
          className="resume-link"
          href="https://velog.io/@naseriansuzie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBlogger />
          Tech Blog
        </a>
      </div>
      <div className="resume-box">
        <p className="title">Skills</p>
        <div className="set">
          <p className="set-name">Language : JavaScript</p>
          <li className="set-detail">ES2015 이후 문법 사용 가능</li>
        </div>
        <div className="set">
          <p className="set-name">Front-end : React, React Native, MobX</p>
          <li className="set-detail">React 컴포넌트 기반 SPA 구축 가능</li>
          <li className="set-detail">
            React Router, React Navigation으로 웹앱/모바일앱 페이지 이동 설계
            가능
          </li>
          <li className="set-detail">
            MobX를 이용하여 상태 관리 및 비즈니스 로직 관리 가능
          </li>
          <li className="set-detail">
            커뮤니티 서비스(프로덕트 등록, 뉴스피드, 댓글, 팔로우, 태그 등록)
            구현 가능
          </li>
          <li className="set-detail">Slack과 유사한 채팅 서비스 구현 가능</li>
        </div>
        <div className="set">
          <p className="set-name">
            Back-end & Database : Node.js, Express, MySQL, Sequelize
          </p>
          <li className="set-detail">REST API 서비스 구현 가능</li>
          <li className="set-detail">
            Express를 이용해 MVC 패턴으로 서버 구축 가능
          </li>
        </div>
        <div className="set">
          <p className="set-name">Deployment : AWS S3, EC2, RDS</p>
          <li className="set-detail">
            AWS로 테스트 완료된 애플리케이션 배포 경험
          </li>
          <li className="set-detail">정적 파일 스토리지 버킷 활용 가능</li>
        </div>
        <div className="set">
          <p className="set-name">Tools : Git, Github</p>
          <li className="set-detail">
            Git/Github을 활용하여 버전 관리 및 협업 가능
          </li>
          <li className="set-detail">
            Git Flow (Upstream, Pull Request, Merge 등) 활용 가능
          </li>
        </div>
      </div>

      <div className="resume-box">
        <p className="title">Work Experience</p>
        <div className="set">
          <p className="set-name">
            월드비전 코리아 [사내벤처 PM / 디지털 고객 경험 기획]
          </p>
          <p className="set-duration">2011.09 - 2019.10</p>
          <li className="set-detail">
            소셜 액션 플랫폼 MVli 기획, closed Beta 서비스 운영
          </li>
          <li className="set-detail">
            45만 정기 후원자 디지털 고객 경험 여정 기획, 온/오프라인 서비스
            재정비
          </li>
          <li className="set-detail">
            잠재 고객 페르소나 프로젝트 진행, 5개 그룹별 차별화 서비스 안 마련
          </li>
        </div>
      </div>

      <div className="resume-box">
        <p className="title">Education</p>
        <div className="set">
          <p className="set-name">Code States</p>
          <p className="set-duration">2019.08 - 2020.02</p>
          <li className="set-detail">
            <a
              className="codestates"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/Code-States-Immersive-Course-16-a78e1e11032947bbbdc423c4729529c0"
            >
              Advanced Software Engineering Immersive Program
            </a>
          </li>
          <li className="set-detail">
            자료구조, 알고리즘, OOP, Javascript 기반 SPA/server 구축, 배포 학습
          </li>
        </div>
        <div className="set">
          <p className="set-name">총신대학교</p>
          <p className="set-duration">2007.03 - 2011.08</p>
          <li className="set-detail">학사학위 수료: 아동학/기독교 교육</li>
        </div>
      </div>

      <div className="resume-box">
        <p className="title">Contact</p>
        <div className="set">
          <p className="contact">
            <FaMobileAlt />
            <span></span>
            +82-10-9476-6995
          </p>
          <p className="contact">
            <AiTwotoneMail />
            <span></span>
            yh0gogo@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
