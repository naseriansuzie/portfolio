import React from "react";
import { FaPaperclip, FaBlogger, FaMobileAlt } from "react-icons/fa";
import { AiTwotoneMail, AiFillInstagram } from "react-icons/ai";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-box">
        <a
          className="resume-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPaperclip size={18} />
          Resume
        </a>
        <a
          className="resume-link"
          href="https://madforge50.tistory.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBlogger size={20} />
          Blog
        </a>
        <a
          className="resume-link"
          href="https://www.instagram.com/madforge50/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram size={24} />
          Instagram
        </a>
      </div>

      <div className="resume-box">
        <p className="title">Strength</p>
        <div className="set">
          <p className="set-name">Certificate</p>
          <li className="set-detail">영어 중등학교 2급 정교사</li>
          <li className="set-detail">TESOL diploma</li>
          <p className="set-duration">
            2008.05 / Universal College Of Language (CANADA)
          </p>
          <li className="set-detail">
            TEYC diploma(Teaching English for Young Child
          </li>
          <p className="set-duration">
            2008.05 / Universal College Of Language (CANADA)
          </p>
          <li className="set-detail">보드게임 지도사 2급 자격</li>
          <p className="set-duration">2018.11 / 한국 보드게임 산업협회</p>
        </div>
        <div className="set">
          <p className="set-name">Skills</p>
          <li className="set-detail font16">
            <a
              href={
                "https://madforge50.tistory.com/category/%EC%98%81%EC%96%B4%EA%B5%90%EC%9C%A1"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              영어 교육 커리큘럼 디자인 가능
            </a>
          </li>
          <li className="set-detail">
            학습자 수준(초중고등)에 맞춘 영어교육 자료 개발 가능
          </li>
          <li className="set-detail font16">
            지속적인 학습 콘텐트 발굴:{" "}
            <a
              href={
                "https://madforge50.tistory.com/category/%EC%98%81%EC%96%B4%EA%B5%90%EC%9C%A1/%EC%B5%9C%EC%8B%A0%20%EC%98%81%EC%96%B4%EA%B5%90%EC%9C%A1%20%EC%97%B0%EA%B5%AC%20%EB%8F%99%ED%96%A5"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              최신 영어 교육 논문 리뷰
            </a>
          </li>
          <li className="set-detail font16">
            <a
              href={
                "https://madforge50.tistory.com/category/TV%EB%A1%9C%20%EA%B3%B5%EB%B6%80%ED%95%98%EA%B8%B0"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              TV 시리즈
            </a>
            /{" "}
            <a
              href={
                "https://madforge50.tistory.com/category/%ED%95%98%EB%A3%A8%EC%97%90%20%ED%95%9C%EC%AA%BD%EC%9C%BC%EB%A1%9C%20%EA%B3%B5%EB%B6%80%ED%95%98%EA%B8%B0"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              책
            </a>{" "}
            /
            <a
              href={
                "https://madforge50.tistory.com/category/%EA%B2%8C%EC%9E%84%EC%9C%BC%EB%A1%9C%20%EA%B3%B5%EB%B6%80%ED%95%98%EA%B8%B0"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              게임
            </a>
            을 통해 영어 표현 학습 콘텐트 발굴
          </li>
        </div>
      </div>

      <div className="resume-box">
        <p className="title">Work Experience</p>
        <div className="set">
          <p className="set-name">
            이퍼블릭 코리아 [영어교육 앱 개발 콘텐트 기획/검수]
          </p>
          <p className="set-duration">2019.05 - 2019.11</p>
          <li className="set-detail">
            영어교육 어플리케이션 '샐러드 잉글리시' 전반 콘텐츠 개발과 검수
          </li>
          <li className="set-detail">
            적절한 상황별 영어표현을 담은 유튜브 콘텐트 발굴
          </li>
          <li className="set-detail">자체 개발 영어학습 영상 검수</li>
        </div>

        <div className="set">
          <p className="set-name">대안학교 영어 교사 [영어 독해/듣기 강의]</p>
          <p className="set-duration">2015.04 - 현재</p>
          <li className="set-detail">
            서울 기독학교 연구 부장: 전체 영어 교육과정 기획 및 개발
          </li>
          <li className="set-detail">
            영어 독해 및 듣기 교육과정에 대한 교재 개발
          </li>
          <li className="set-detail">
            강의 학교: 서울 초원학교, 도시속작은학교, 비전학교, 사랑사람나눔학교
          </li>
        </div>
      </div>

      <div className="resume-box">
        <p className="title">Education</p>
        <div className="set">
          <p className="set-name">중앙대학교 대학원</p>
          <p className="set-duration">2014.09 - 2016.08</p>
          <li className="set-detail">세부 전공: 제2언어 습득</li>
          <li className="set-detail">
            석사 졸업 논문: 고등학교 학생들의 명시적/비명시적 L2 지식과
            작동기억과 L2 능숙도 간의 관계
          </li>
        </div>
        <div className="set">
          <p className="set-name">총신대학교</p>
          <p className="set-duration">2007.03 - 2014.02</p>
          <li className="set-detail">학사학위 졸업: 영어 교육</li>
        </div>
      </div>

      <div className="resume-box">
        <p className="title">Contact</p>
        <div className="set">
          <p className="contact">
            <FaMobileAlt />
            <span></span>
            +82-10-7101-3583
          </p>
          <p className="contact">
            <AiTwotoneMail />
            <span></span>
            madforge50@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
