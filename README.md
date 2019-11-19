1. backend(express) router 설정
	- backend/app.js파일 수정과  backend/routes폴더에 파일 생성

	- backend/app.js에 9, 26 라인을  추가
		- 여기서 경로를 /api/movies로 설정, 전체 주소는 localhost:3000/api/movies
	- backend/routes/movies.js 파일 생성
		- 5~7 라인은 movies.js의 root 경로, app.js에서 설정한 주소이다. 즉 localhost:3000/api/movies
		- 9~15 라인은 movies.js에 id 값을 같이 넘겨준 경로, localhost:3000/api/movies/1

	- 저희 프로젝트의 api를 만들 때도 backend/routes폴어 안에 파일을 만들면 될 거 같습니다.
		- ex) user.js, item.js 등등


1. frontend(vue) 페이지 로딩 방법
	- frontend 코드 보시다가 궁금해하실 것 같아서 간략하게 적어보겠습니다.

	- html 파일은 frontend/public/index.html 파일 하나만 존재
	- body의 div 태그안의 내용이 계속 바뀌어서 로드되는 구조
	- frontend/App.vue가 index.html에 제일 처음 로드되는 vue 파일
		- 코드를 보면  <router-view/>라는 태그가 존재
		- 이 태그에 frontend/router/index.js의 내용에 따라 frontend/components나 frontend/views에 있는 파일을 로드


1. frontend(vue) router 설정
	- frontend/router/index.js파일 수정과 frontend/components폴더에 파일 생성

	- frontend/router/index.js에 22~30라인을 추가
		- 각각의 path는 localhost:8080 뒤에 붙는 path
		- 즉 localhost:8080/movies 와 localhost:8080/movies/1 이 된다.
	- localhost:8080/movies를 요청 시 frontend/components/movies.vue가 실행, 이때 영화 데이터를 받아오기 위해 script로 get 요청
		- get은 localhost:8080/api/movies로 요청


1. frontend-backend 데이터 교환 방법
	- frontend의 vue.config.js파일에서 proxy 설정이 되어있는 상태
		- localhost:8080/~로 접속 시, 데이터를 받아오기 위해 localhost:8080/api/~를 요청, 이때 이 주소가  localhost:3000/api/~ 로 porxy 된다.
			- 여기서 8080이 vue의 포트번호, 3000이 express 포트번호
			- ex) localhost:8080/movies 접속 -> frontend/src/components/movies.vue의 스크립트 부분에서 localhost:8080/api/movies를 요청 -> proxy에 의해 localhost:3000/api/movies로 변환 -> backend에서 영화 데이터 리턴


1. 실행 방법
	- frontend 시작 - frontend 폴더에서 npm run serve
	- backend 시작 - backend 폴더에서 DEBUG=backend:* npm start
