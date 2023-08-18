# <center>🤗 효도리</center>

<center><img src="https://user-images.githubusercontent.com/116176170/224098342-668eb9ca-8121-47e2-9d3e-730f4f10f155.png" width="400" height="250"/></center>

### **<center>"이제, 부모님이 외롭지 않게 도와주세요."</center>**

> 부모님을 모시고 가기 좋은 서울시 문화・여가시설 정보를 제공 합니다.<br>
> 효도채널을 통해 다양한 효도 챌린지에 도전 해보세요!

<br>

# 📃 **개요**

- **서비스명:** 효도리
- **기획 기간:** 2023.03.06 ~ 2023.03.10
- **개발 기간:** 2023.03.10 ~ 2023.03.25
- **주제:** 효도 서비스
- **목표:** 객관적 수치를 활용해 **서울시 1인가구 통계 가시화** 및 사회적 접촉이 약한 중장년층의 **자녀들이 효도 할수있는 서비스 제공**

<br>
<br>

# 🫶 **팀원 소개**

| 이름                                    | 담당 업무              |
| --------------------------------------- | ---------------------- |
| [이상준](https://github.com/GitHub-SJL) | 팀장/프론트엔드 개발   |
| 주혜은                                  | 프론트엔드 개발        |
| 이승은                                  | 프론트엔드 개발        |
| [정동원](https://github.com/chorok446)  | 백엔드 개발            |
| 김은수                                  | 백엔드 개발/데이터분석 |
| 김정우                                  | 백엔드 개발            |

<br>
<br>

# 🛠️ **기술스택**

### Front-End

<div>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>
 <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=MUI&logoColor=white"/>

</div>
<br />

### Back-End

<div>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=black"/>
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/Multer-F46519?style=flat-square&logo=Multer&logoColor=white"/>
<img src="https://img.shields.io/badge/Passport-34E27A?style=flat-square&logo=Passport&logoColor=white"/>
<img src="https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=Mysql&logoColor=white"/> 
<img src="https://img.shields.io/badge/AWS RDS-527FFF?style=flat-square&logo=AMAZONRDS&logoColor=white"/>
<img src="https://img.shields.io/badge/AWS S3-569A31?style=flat-square&logo=AmazonS3&logoColor=white"/>
 <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/>

</div>
<br />

### Data-Analysis

<div>
<img src="https://img.shields.io/badge/GoogleColab-F9AB00?style=flat-square&logo=GoogleColab&logoColor=white"/>
<img src="https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=Pandas&logoColor=white"/>
<img src="https://img.shields.io/badge/Numpy-013243?style=flat-square&logo=Numpy&logoColor=white"/>
<img src="https://img.shields.io/badge/Python-3766AB?style=flat-square&logo=Python&logoColor=white"/>
<img src="https://img.shields.io/badge/seaborn-2081E2?style=flat-square&logo=seaborn&logoColor=white"/>
<img src="https://img.shields.io/badge/Matplotlib-000?style=flat-square&logo=Matplotlib&logoColor=white"/>
</div>

<br />

<br>
<br>

# 📖 **프로젝트 기획**

- ## **문제인식 (인사이트)**

<br>

<img src="https://i.ibb.co/6007yQV/1.png"/>

### **매년 증가하는 1인가구**

서울시의 2016년~2021년 1인 가구수 총합을 구하여 시간의 경과에 따른 변화량을 시각화 해봤을때, 2016년 1138860명에서 2021년 1489893명으로 약 35만명이 늘었으며, 지속적으로 증가하는 추이를 보였습니다.


<br>

![image](https://i.ibb.co/V2pKRTy/3.png)

### **중장년층 이후 사회적 활동 감소**

1인가구 중에서도 연령대가 높을수록, 특히 50대 이후의 중장년층 세대는 외출 및 커뮤니케이션 지수가 현저히 낮은 경향을 보입니다. 중장년층 세대는 다른 연령대에 비해 사회적 고립 문제에 더 취약하다는 점을 파악하였습니다.

<br>
<br>

- ## **기획의도 (해결책)**

  ![image](https://i.ibb.co/cFWbmrL/4.png)

- 인터넷 환경에 익숙한 청년층은 문화나 여가 생활을 누리는데 용이하지만, 중장년층과 노년층은 이러한 부분에서 어려움을 겪기 때문에,
  중장년층 이상의 세대는 사회적 활동이 적고, 사회적 고립에 취약하다는 문제점이 있었습니다.
- 50대 이후 연령대는 성인이 된 자녀를 모두 출가시키고, 배우자를 먼저 하늘나라로 보낸 이들이 있습니다. 위의 그래프를 보면, 연령대가 높아질 수록 혼인상태가 **사별/이혼**인 비율이 증가합니다.
- 따라서 사회적 고립에 취약한 중장년층 이상의 1인가구들과, 자녀들을 위하여, **자녀들이 부모님과 함께 문화여가시설을 이용하기 위한 정보제공 및 효도 챌린지 서비스를 제공하여 이러한 문제점을 개선하려고 합니다.**

<br>
<br>

# 🙌 **프로젝트 설명**

## **웹 서비스의 최종적인 메인기능과 서브기능 설명**

- ### **주요 기능**

  ### `서울시 주요 문화시설 정보 제공`

  - 지도에서 서울시의 문화시설을 조회할 수 있습니다.
  - 해당하는 문화시설 클릭 시 모달 팝업에서 상세정보를 확인할 수 있습니다.
    - 상세정보에는 카테고리, 이름, 장소, 전화번호, 홈페이지 주소, 시설 소개를 제공합니다.
  - 원하는 문화시설의 이름을 검색할 수 있습니다.
  - 문화시설의 목록을 리스트 형식으로 조회할 수 있습니다.
  - 마이페이지의 "내장소" 탭에 원하는 문화시설을 저장할 수 있습니다.

    <br>

  ### `효도 챌린지 참여`

  - 등록된 전체 챌린지를 진행중, 모집중, 완료 탭에 따라 조회할 수 있습니다.
  - 챌린지 상세 페이지에서 챌린지에 참여할 수 있습니다.
  - 챌린지를 직접 등록, 수정, 삭제 할 수 있습니다.
  - 참여중인 챌린지를 확인할 수 있습니다.
  - 마이페이지의 "내챌린지" 탭에 참여한 챌린지를 저장할 수 있습니다.

    <br>

- ### **서브 기능**

  - 회원가입 / 회원탈퇴
  - 로그인 / 로그아웃
  - 회원정보 수정
  - 내 정보 조회

    <br>

## **웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**

- ### **웹서비스의 유용성, 편의성**

  #### **서울시 주요 문화시설 정보 제공**

  문화여가 시설 정보 제공 서비스를 제공함으로써, 다양한 시설 정보를 쉽게 확인하고 방문하여 중장년층의 사회적 활동을 증진과 부모님과 함께 문화여가 시설을 이용하여 효도를 실천할 수 있는 서비스를 제공합니다.

  #### **효도 챌린지 기능**

  자녀들이 중장년층 부모님의 사회적 접촉 증진을 돕는 정보 제공 및 동기 부여할 수 있습니다.

<br>

- ### **데이터 시각화 실용성**

  #### **1인가구의 문제점 파악**

  서울시 연도 별 1인가구수 추이, 연령대별 외출, 커뮤니케이션 지수 시각화 등을 통해 1인가구수가 지속적으로 증가하고, 중장년층 이후로 사회적 활동이 부족하다는 문제점을 파악하였습니다.

  #### **서비스 타겟 선정과 해결책 제시**

  서울시 혼인 상태 별 1인가구수 시각화로 50대 이후 연령대는 유배우, 사별/이혼의 비율이 높이 차지하는 것을 확인하여 1인가구 부모님과 그들의 자녀를 서비스의 타겟으로 선정하였습니다. 이에 따라, 앞서 파악한 문제점에 걸맞는 외출, 커뮤니케이션을 증진시킬 수 있는 해결책을 제시하였습니다.

<br>

## 📊 **데이터**

### 활용 데이터

[서울 시민생활 데이터-행정동단위 10개 관심집단수](https://data.seoul.go.kr/dataVisual/seoul/seoulLiving.do) <br>
[서울시 1인가구(연령별) 통계](https://data.seoul.go.kr/dataList/10995/S/2/datasetView.do)<br>
[서울시 1인가구 (혼인상태별) 통계](https://data.seoul.go.kr/dataList/10085/S/2/datasetView.do) <br>
[서울시 문화공간 정보](https://data.seoul.go.kr/dataList/OA-15487/S/1/datasetView.do)<br>
[혼자 생활하면서 곤란한 점](https://data.seoul.go.kr/dataList/DT201013E119/S/2/datasetView.do)<br>

### 데이터 정제

- 연령대 별 병합
  - 20대 (초기청년층), 30대 (후기 청년층), 40대 (중년층), 50~64(장년층), 65세 이상 (노년층)
- 이상치 제거 
- 스케일링 

### 데이터 분석 / 시각화

- 2016년~2021년 1인 가구수 총합을 구하여 시간의 경과에 따른 변화량과 데이터지도를 그려봤을때, <br>**연도별 1인 가구수는 지속적으로 증가**하고 있다.
  <br>

- 2021년 이후 연령대별 1인 가구의 **커뮤니케이션이 적은 집단 비교를 통해 중년층 이후 커뮤니케이션 지수가 감소**한다.
  - 커뮤니케이션이 적은 집단 측정 기준 - 전화/문자 수 발신 대상자 수, 전화/문자 수 발신 건 수,SNS 사용량 기준
    <br>
- 2021년 이후 **외출이 매우 많은 집단 데이터를 조사했을때, 중년층 이후 외출이 감소**한다.
  - 외출이 매우 많은집단 측정 기준
    - 1인가구 대상 근로소득이 3천만원 초과이고, 휴일의 이동건수와 이동거리가 크고, 휴일의 추정거주지 체류시간이 적은 사람 기준(휴일 이동경향이 높은 대상자를 구분하기 위함)

<br>

<br>
<br>

# 🎁 프로젝트 구성

### a. [와이어프레임](https://www.figma.com/file/cOO1s1X0iRr56W8oBsDZN7/Untitled?node-id=0%3A1&t=sMdhP47C58lv7SKM-1)

### b. 스토리보드

### c. 시나리오

### d. [기능 명세](https://www.notion.so/elice/FE-0bd12bd19fc840beab2dc21b904ea669)

### e. [ERD](https://www.erdcloud.com/d/RvEy73kMj6MdSqoGd)

### f. [API 명세](https://documenter.getpostman.com/view/20738849/2s93Jxqfya)
