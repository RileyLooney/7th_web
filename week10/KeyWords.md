# 변환값의 타입 

```TS
const (변수명) : (변수 타입) = (반환값)
```

## 반환값
 * string : 문자열
 * number : 숫자
 * boolean : 참 / 거짓
 * null
 * undefined
 * symbol
 * bigint
 * object


## 예시 코드
> ```TS
> const name : string = 'user_name';
>
> const age : number = 9;
>
> const town : object = { country : 'Korea', city : 'Seoul'} 
> ```

# 매개변수의 타입
함수 선언식
```TS
function (함수명)((변수명) : (매개변수의 타입) ... ) : (함수의 타입) {
    ~~~~
}
```

화살표 함수
```TS
const (함수명) = ((변수명) : (변수 타입)) : (함수 타입) => {
    ~~~
}
```

## 예시 코드
```TS
const name = (firstName: string, lastName: string) : string => {
    return firstName + lastName;
}
const fullName = name("R","L");

function add(x: number, y: number): number {
    return x + y;
}
const add(9,7);
```

# 리터럴 타입
'리터럴'을 타입으로 사용하는 방식\
<span style="color:gray">특정 값만 가지는 변수 만들 수 있음</span>

## 예시코드
```
// name은 "karl"만 가질 수 있음
const name : "karl" = "karl"
```

## 객체 리터럴
