import React, { useState } from "react";
import Project from "./Project";

const ProjectList = () => {
  const [projects] = useState([
    {
      id: 1,
      gifDirection: "vertical",
      gifs: [
        {
          text: "Registration",
          uri:
            "https://user-images.githubusercontent.com/53066365/75258237-8070c900-5829-11ea-92f4-767a1c4d41e9.gif",
        },
        {
          text: "Post/Thread",
          uri:
            "https://user-images.githubusercontent.com/53066365/75259352-3983d300-582b-11ea-81ac-6b08ccac6273.gif",
        },

        {
          text: "Bio Information",
          uri:
            "https://user-images.githubusercontent.com/53066365/75258300-9aaaa700-5829-11ea-8aac-15ff11fe941f.gif",
        },
        {
          text: "Album/Follow",
          uri:
            "https://user-images.githubusercontent.com/53066365/75259820-f8d88980-582b-11ea-8fe9-c447dc3692c1.gif",
        },
      ],
      name: "DediCats",
      position: "Front-end Engineer",
      duration: "2020.02 - 2020.02",
      gitHub: "https://github.com/naseriansuzie/DediCats_Client",
      android:
        "https://play.google.com/store/apps/details?id=com.codestake.DediCats",
      ios: null,
      desc:
        "스폿별 길고양이 등록, 고양이 별 뉴스피드, 팔로우 기능을 제공하는 지도 기반 모바일 어플리케이션의 프런트엔드를 개발하였습니다.",
      stack: "React Native, React Navigation, MobX, Native Base, socketIO",
      contribution: [
        `- 유저 니즈를 고려한 전체 서비스 워크플로 및 필요 컴포넌트 설계`,
        `- 서비스에 필요한 정보 분석을 통해 MobX store 디자인`,
        <a
          href="https://youtu.be/Y6T4lNcSfsc"
          target="_blank"
          rel="noopener noreferrer"
        >
          (MobX 관련 기술발표)
        </a>,
        `- 길고양이 사진, 좌표, 기본 정보 등록 기능으로 스팟별 길고양 등록 구현`,
        `- 길고양이 일별 건강 상태, 실종/복귀 표시 기능을 구현으로 유저 간 최신 정보 공유`,
        `- 오픈 커뮤니티 정책으로 인해 발생할 수 있는 abusing case 신고 기능 구현`,
      ],
    },
    {
      id: 2,
      gifDirection: "horizontal",
      gifs: [
        {
          text: "Real-time Chats",
          uri:
            "https://user-images.githubusercontent.com/53066365/76633476-204b8800-6588-11ea-8398-8b819e598cd6.gif",
        },
      ],
      name: "diSlack",
      position: "Front-end Engineer",
      duration: "2020.01 - 2020.01",
      gitHub: "https://github.com/naseriansuzie/diSlack_client",
      android: null,
      ios: null,
      desc: "업무용 메신저 ‘슬랙’ 클론 웹앱의 프런트엔드를 개발하였습니다.",
      stack: "React, React Router, Antd, socketIO",
      contribution: [
        `- 워크스페이스 내 채널별, dm별 채팅 기능으로 1:n, 1:1 채팅 구조 구현`,
        `- 채팅 메시지별 댓글 창에 웹소켓 반영, 실시간 커뮤니케이션과 댓글 카운트 구현`,
        `- 가입 유무에 따라 워크스페이스 필터링, 워크스페이스 가입 관련 사용자 경험 개선`,
      ],
    },
  ]);
  return (
    <div>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
