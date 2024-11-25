# State
## > State란?
<a href='https://ko.react.dev/learn/state-a-components-memory' style="color:#6495ed" >> Link : State (React Dos)</a>

`state`(상태)는 컴포넌트가 독립적으로 가지는 값이다.\
클래스의 메서드, 함수의 지역변수와 비슷하다.\
발생하는 <b style="color:mediumpurple">이벤트와 상호작용</b>하여 값이 변할 수 있다.

> "컴포넌트는 상호 작용의 결과로 화면의 내용을 변경해야 하는 경우가 많습니다. 폼에 입력하면 입력 필드가 업데이트되어야 하고, 이미지 캐러셀에서 “다음”을 클릭할 때 표시되는 이미지가 변경되어야 하고, “구매”를 클릭하면 상품이 장바구니에 담겨야 합니다. 컴포넌트는 현재 입력값, 현재 이미지, 장바구니와 같은 것들을 “기억”해야 합니다. React는 이런 종류의 컴포넌트별 메모리를 state라고 부릅니다."


## > State 정의에서 중요점
<a href='https://velog.io/@delilah/React-4-Component-state#:~:text=%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C%EB%8A%94%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98%20%EC%83%81%ED%83%9C%EB%A5%BC%20%EA%B4%80%EB%A6%AC%20%ED%95%98%EA%B8%B0%20%EC%9C%84%ED%95%B4%20state%EB%A5%BC%20%EC%82%AC%EC%9A%A9%ED%95%9C%EB%8B%A4.,setState%20%28%29%ED%95%A8%EC%88%98%20%28%EC%83%81%ED%83%9C%20%EA%B4%80%EB%A6%AC%20%ED%95%A8%EC%88%98%29%20%EB%A5%BC%20%EC%82%AC%EC%9A%A9%ED%95%B4%EC%95%BC%20%ED%95%9C%EB%8B%A4.' style="color:#6495ed">> Link : (Velog)</a>

`state`를 정의할 때 초기화를 하여야 한다.

## > React Component 생명주기
<a href='https://ko.legacy.reactjs.org/docs/state-and-lifecycle.html#gatsby-focus-wrapper' style="color:#6495ed">> Link : State and Lifecycle (React Dos)</a>

컴포넌트가 많아질 수록 리소스 관리가 중요하다.\
컴포넌트를 마운팅할 때 <b>적절히 할당</b>해주고 언마운팅 때 <b>회수</b>해야 한다.\
컴포넌트 클래스에서 <b style="color:mediumpurple">마운트되거나 언마운트될 때 동작</b>하는 특별한 메서드가 있는데 이를 <b style="color:mediumpurple">생명주기 메서드</b>라고 한다.

다시말해\
컴포넌트의 <b style="color:mediumpurple">리소스 할당과 회수에 관한 내용</b>이다.

# Hooks
## > Hooks 개발 배경
<a href='https://ko.legacy.reactjs.org/docs/hooks-intro.html#motivation' style="color:#6495ed">> Link : 개발 동기 (React Dos)</a>
<p>
    <b>1. 상태 재사용의 어려움</b>
</p>
<p>
    <b>2. 유지보수의 효율 증대</b>
</p>

## > useState 간단 설명 & 사용법
<a href='https://ko.react.dev/reference/react/useState' style="color:#6495ed">> Link : useState (React Docs)</a>

매개변수 : `initialState` (state의 초기값)\
반환값 : state와 setState 들어있는 배열

예시 코드
```jsx
import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <>
            <div>
                <p>Count Clicks : {count}</p>
                <button onClick={() => setCount(count + 1)}>
                    Count up
                </button>
            </div>
        </>
    )
}

export default Counter;
```

## > SideEffect 사전적 의미
<a href='https://dictionary.cambridge.org/dictionary/english/side-effect' style="color:#85B09A">> Link : SideEffect 정의 (Cambridge 사전)</a>

- 예상하지 못한 결과
- 의도한 것과 달리 추가적으로 일어나는 일

## > SideEffect in React
<a href='https://ko.react.dev/learn/keeping-components-pure#side-effects-unintended-consequences' style="color:#6495ed">> Link : Side Effect (React Docs)</a>



## > useEffect 간단 설명 & 사용법


## > Hooks 규칙
[hooks 규칙](https://ko.legacy.reactjs.org/docs/hooks-rules.html)

<b> - 최상위에서만 호출해야 한다 - </b>\
반복문, 조건문, 중첩된 하뭇 내에서 호출 X\
여러번 호출되는 주엥도 상태를 올바르게 유지하기 위함

<b> - React 함수 내에서만 호출한다 - </b>\
일반적인 JS 함수에서 호출 X\
컴포넌트의 모든 상태 관련 로직의 가독성 높이기 위함

# Props-Drilling
## > [Props-Drilling이란?](https://ko.react.dev/learn/passing-data-deeply-with-context)
일반적으로 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달할 때는 `prop`을 사용한다. 하지만 중간에 많은 컴포넌트를 거칠 경우 같은 `prop`전달이 반복된다.

이렇게 `prop`을 통해 컴포넌트를 뚫고 내려가 값을 전달하는 것을 **Prop-Drilling**이라 한다.

## > 해결방안
**Context**를 활용할 수 있다.

# Context_API

# [Redux](https://ko.redux.js.org/introduction/getting-started/)
## > [상태관리의 필요성](https://velog.io/@inhohyun/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C%EC%9D%98-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC)
 - 상태가 바뀌었을 때 필요한 부분에만 업데이트를 할 수 있다. (SPA 부분에서 유리)
 - 네트워크 통신 횟수를 줄일 수 있다.
 - 값의 변화를 추적할 수 있다.

## > [상태관리 툴의 역할](https://ko.redux.js.org/introduction/why-rtk-is-redux-today/)
상태관리 중 흔하게 발생하는 실수를 줄이는 기능을 제공해주고 간단하게 코드를 작성하게 해준다.

## > [Redux의 기본 개념](https://ko.redux.js.org/introduction/core-concepts)
<ol>
    <li>~~</li>
    <li>~~</li>
    <li>~~</li>
</ol>

## > Store, Action, Reducer
### [**Store**](https://ko.redux.js.org/api/store/#store-%EB%A9%94%EC%84%9C%EB%93%9C-1)
앱 전체의 상태 트리를 가지는 저장소.\
Action으로만 상태를 바꿀 수 있다

### **Action**
앱 변경사항을 기술하는 객체\
Store로 데이터를 보내는 _유일한 방법_

### **Reducer**


## > Redux 장점

# Redux Toolkit
## > Redux-toolkit VS Redux
|~~~|Redux-toolkit|Redux|
|---|-------------|-----|
|aaa|aaaaaaaaaaaaa|aaaaa|

## > Redux-toolkit 사용법

# [Zustand](https://zustand-demo.pmnd.rs/)
베어본 상태 관리 솔루션\
hook 기반 