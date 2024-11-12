# 키워드 정리

# useEffect
컴포넌트에게 HTML 형식으로 정보를 보여주는 것 외에 다른 작업을 수행시키는 것을 <span style="color: mediumpurple">부수 효과 (Side Effect)</span>라고 한다.</br>
부수 효과를 특정 조건에서만 실행하기 위한 훅이 `useEffect`

# try, catch, finally
`try`블록 안의 코드가 먼저 실행됨
만약 블록 안에서 에러가 발생할 경우
`catch`블록 안의 코드 실행
`finally`는 제어 흐름을 빠져나가기 전에 실행하는 부분

```JSX
try {
  tryStatements
} catch (exceptionVar) {
  catchStatements
} finally {
  finallyStatements
}
```

<ul>
	<li>
		<b style="color:aqua">tryStatements</b> : try 블록에서 실행될 구문
	</li>
	<li>
		<b style="color:aqua">catchStatements</b> : try 블록에서 예외가 발생했을 때 실행될 구문
	</li>
	<li>
		<b style="color:aqua">finallyStatements</b> : 예외의 여부와 관계없이 실행되는 구문
	</li>
</ul>

# Axios VS Fetch
둘 다 모두 JS에서 API를 연동하기 위한 HTTP 클라이언트 라이브러리

## Axios
reponse 데이터 다루기 쉬움
다양한 기능 존재, 호환성 좋음

## Fetch
JS내장 라이브러리 → 별도의 설치 필요 없음
또한 업데이트에 따른 오류가 적음

# env file
공개되어서는 안되는 데이터를 관리한다.
관련 정보를 하드코딩하지 않고 `.env`에서 관리한다

예를들어 API key, DB 접속 비밀번호 등등