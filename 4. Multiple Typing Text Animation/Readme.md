![alt text](image.png)

<h2>HTML<h2>
.container > span.text.first-text + span.text.sec-text

<h2>CSS</h2>

**body**

배경색 : #010718;

overflow : hidden

**.containr .text**

: 글자색 크기 두께: #4070f4; 30px; 600

: relative(기준점)

**span.text.first-text**

글자색 : #fff;

**span.text.sec-text**

- 가상선택자 :before를 사용해서 커서 만들기

- 배경색 : #010718

- 글자색 : #4070f4

- 너비와 높이가 100%인데, 부모인 container의 영역에 맞추는 것을 의미(맞나?)

- 애니메이션 animate 4s steps(12) infinite;

**애니메이션 animate**

40%, 60% 일때, 왼쪽으로 100%로 이동

100% 일때, 왼쪽으로 0%로 이동

<h2>JS</h2>

기능 : 타이핑 텍스트를 변경  
settimeout 함수를 써서 0, 4000, 8000마다 다른 텍스트를 삽입하기  
setinterval 함수를 이용해, 함수실행에 간격주기 (12000ms 초마다 호출)

<h2>궁금한점</h2>

<h3>1. animation에 step을 사용하는데, linear랑 비교해서 설명해줘. linear만 써서 step은 낯설구만</h3>

> linear는 부드럽게 계속 변하고,  
> steps()는 “뚝뚝 끊어서” 변한다.

`animation: move 2s linear infinite;`
시간에 따라 연속적으로 변화, 중간값이 모두 계산됨
`animation: typing 2s steps(5) infinite;`
변화를 5단계로 나눔, 중간 프레임 없음

<h3>2. 화살표 함수와 일반함수 코드 비교</h3>

**화살표함수**

```
const add = (a, b) =>
a + b; // a,b를 받아서 a+b를 만들어 준다
```

**일반함수**

```
function add(a, b) { // function : 함수 만들게요! a,b : 재료
return a + b; //return : 결과
}
```

- 일단 너무 어려운 개념은 패스하고, 이것만 기억해 보자. **평상시에는 화살표 함수로 간결하게 사용하되, 객체안에서 함수를 만들때는 일반함수만 쓸 수 있다.** 이유는 나중에 알자. 난 아직 초급이라 더 이상알면 공부하기 싫어질거 같아서 일단 스킵ㅋ

```
const user = {
name: "Kim",
sayName: function () {
console.log(this.name);
}
};
```

<h3>3. setTimeout 함수</h3>
: 시간이 끝나면 실행되게 설정

```
setTimeout(할일, 시간);

setTimeout(() => { // 화살표함수는 실행할 함수
console.log("3초 뒤에 나와요");
}, 3000); // 3000ms = 3s, 기다릴 시간

```

: 함수를 따로 빼서 쓰는 것도 가능

```
const sayHi = () => {
console.log("안녕");
};

setTimeout(sayHi, 1000); // sayHi()를 쓰면 오류남
```

: 사용

- 로딩 끝난 뒤 메시지 보여주기
- 몇 초 후 텍스트 바꾸기
- 애니메이션 순서 만들기
  : 여러개 쓰면 순서대로 실행됨

```
setTimeout(() => {
console.log("첫 번째");
}, 0);

setTimeout(() => {
console.log("두 번째");
}, 2000);
```

: setTimeout vs setInterval

| 함수        | 의미      |
| ----------- | --------- |
| setTimeout  | 한 번만   |
| setInterval | 계속 반복 |

<h3>4. innertext와 textcontent 차이</h3>

> textContent = 코드에 있는 글자 전부  
> innerText = 화면에 보이는 글자만, display:none은 제외

| 구분      | textContent | innerText |
| --------- | ----------- | --------- |
| 숨긴 글자 | 포함        | ❌        |
| CSS 영향  | ❌          | ✅        |
| 속도      | 빠름        | 느림      |
| 실무 사용 | 많음        | 적음      |

<h3>5. setinterval 함수</h3>

: 정해진 시간마다 계속 반복해서 실행

```
setInterval(할일, 시간);

const id = setInterval(() => {
console.log("1초마다 실행");
}, 1000);

// setInterval 함수 멈추기

clearInterval(id);

```

: 사용

- 시계 만들기
- 숫자 카운트
- 텍스트 반복 변경
- 애니메이션 반복

<h3>6. textLoad() 함수를 한번 호출시킨 다음에 setInterval함수를 왜 써야하는지 모르겠음. 동작은 안하는데 왜 안하는걸까</h3>

> setInterval은 지금 당장 실행하는 게 아니라,  
> “시간이 지난 뒤부터” 실행을 시작하기 때문

```textLoad(); // 처음 실행

setInterval(() => { // 12초 후부터 12초 마다의 의미
textLoad();
}, 12000);
```

<h3>7. 혼자 만들어 보니까 I'm a 이부분이 고정이 안되고 움직이는 게 좀 거슬리네.</h3>
: container의 width 영역을 246px로 주고, overflow: hidden 해주면 됨

<h2>출처</h2>

https://youtu.be/nxoHR9lltK0?si=cT9mQKwgCpdthexF
