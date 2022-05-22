# NETCHA - 사용자 경험 기반 영화 추천 사이트

---

#### [ 배포주소 ](http://aa45ad59075e14ae2a4538dee06b9869-1628875909.ap-northeast-3.elb.amazonaws.com/)

#### [ 기획안 Notion ](https://ivy-feather-a16.notion.site/NETCHA-7aee2612452f4fabaf02ba541b3e78f8)

## 🖥 프로젝트 기획 배경

> Reactjs와 Django를 이용한 클라이언트 - 서버를 구성하고 이를 활용한 웹서비스 개발한다.
>
> Docker & Kubernetes를 활용하여 CI/CD파이프라인을 구성하고 배포한다.

## 🚀팀구성

![image](https://user-images.githubusercontent.com/98939242/169683773-fd3c0d93-a720-45ce-9956-e004f762dee8.png)

## 🚀역할

![image](https://user-images.githubusercontent.com/98939242/169683793-1c890eeb-42e3-45a0-a180-3a5abe792936.png)

## 개발스택

![image](https://user-images.githubusercontent.com/98939242/169683821-68a4befb-ca54-452b-aa21-cb6e078208a2.png)

## 프로젝트 상세 설명

1.  여러 사용자가 여러 영화에 평점과 리뷰를 생성할 수있습니다.

2.  해당 정보를 기반으로 사용자가 좋아할 수 있는 영화를 추천해줍니다.

3.  보고 싶은 영화 또는 좋아하는 영화는 좋아요 기능을 통해 저장해두었다가 바로 확인 할 수 있습니다.

4.  영화에 대한 정보가 부족하다면 페이지 내에서 Youtube 검색 기능을 통해 관련 영상을 검색할 수 있습니다.

5.  장르별로 영화를 구분하여 보고싶은 장르만 따로 골라 볼 수 있습니다.

6.  검색기능을통해 찾고싶은 영화가 있을 경우 쉽게 찾을 수 있습니다.

---

<B>ERD</B>
![image](https://user-images.githubusercontent.com/98939242/169684192-a5c55c8d-f841-4826-b769-e1c6000cf5d2.png)

<B>Flow chart</B>

![image](https://user-images.githubusercontent.com/98939242/169684225-6b82d81e-4afa-41e2-813e-6dcf6c05da40.png)

![image](https://user-images.githubusercontent.com/98939242/169684239-b4c91396-5372-46d0-a6e2-77640e387fed.png)

---

## 📚주요기능

- 로그인 / 회원가입 기능
- 메인페이지 / 배너 기능
- 장르 검색 기능
- 키워드 검색 기능
- 좋아요 기능 / 내가 찜한 페이지
- 리뷰 작성 & 수정 & 삭제 기능
- 추천 기능
- Youtube 검색기능

---

## 📟 회고록

- 느낀점:
  프로젝트 시작 전에는 불가능 하다고 생각했던 부분을 실제로 구현하면서 자신감과 실력을 키울 수 있었습니다. 비록 많은 부분을 구글링을 통한 레퍼런스들을 참조하여 약간 덧대어 새로운 것을 만드는 방식으로 완성하였지만 그동안 배웠던 것을 확인하고 복습하는 좋은 기회였습니다.
  또한 React, Django 등을 다루며 웹서비스 부분에 대해서 한층 심화있는 이해를 할 수 있었습니다. 이외에도 직접 Dockerfile 과 deploy.yml 파일을 만들어서 도커 이미지를 만들고 esk를 통해 배포하는 과정을 스크립트화하며 직접 만든 서비스를 MSA화 할 수 있는 경험을 했다고 생각합니다.

* 아쉬웠던 부분:
  React를 깊게 이해하지못해 랜더링 부분과 hook을 사용한 기능을 100% 활용하지 못한거 같아 아쉬웠습니다.
