// 주석
console.log("멀티캠퍼스 강의중...");

// 변수
let userName = "후츠릿";
// console.log("userName", userName);

// 미션:
// 적절한 변수명에 여러분의 이름을 담아서 변수 만들기
// console에 찍어서 확인하기
const userName2 = "후츠릿";

userName = "kjajsdkflj";
console.log("🚀 ~ userName:", userName);

// 데이터 타입
const userAge = 33; // 숫자
const userMBTI = "ENTJ"; // 문자열
console.log("🚀 ~ userMBTI:", userMBTI);

// boolean타입
const isLoggedin = false;
console.log("🚀 ~ isLoggedin:", isLoggedin);
console.log("Type isLoggedin", typeof isLoggedin);

// null/undefined
const empty = null;
let empty2; // 변수 선언만
console.log("🚀 ~ empty2:", empty2);

// 미션: 나머지 변수들도 타입확인하는 코드 작성해서 콘솔에 찍어보기

// 함수

// 함수 정의
function greeting() {
  // 로직
  // 목표: "???님, 반갑습니다" 문자열을 콘솔에 찍기

  // 1. 사용자 이름 담을 변수 선언
  // 2. 사용자에게 이름 받아와서 변수에 담기
  const inputUserName = window.prompt("이름을 입력해주세요.");
  console.log("🚀 inputUserName:", inputUserName);

  // 3. "변수 + 님, 반갑습니다" 문자열 완성하기
  // const result = inputUserName + "님, 반갑습니다";
  const result = `${inputUserName}님, 반갑습니다.`;

  // 4. 완성된 문자열 콘솔에 찍기
  console.log(result);
}

// 함수 실행
// greeting();

// function greetingInput() {}

const greetingInput = (name) => {
  console.log(`${name}님, 반갑습니다`);
};

greetingInput("후츠릿");
greetingInput("김상호");
greetingInput("노태호");
greetingInput("이재욱");

const add = (num1, num2) => {
  console.log("🚀 num1:", num1);
  console.log("🚀 num2:", num2);
  return num1 + num2;
};

const doubleSum = (num) => {
  return num * 2;
};

const addResult = add(10, 30);
const result = doubleSum(addResult);

console.log("🚀 ~ result:", result); // 예상 결과값: 80

// console.log("🚀 ~ addResult:", addResult);

// 미션: 소문자의 텍스트를 파라미터로 받아와서 대문자로 변환한 값을 반환하는 함수 만들기
// hint: toUpperCase()

// 함수 정의
// const upperString = (str) => {
//   return str.toUpperCase()
// }

const upperString = (str) => str.toUpperCase();

// 미션: 소문자로 변환하는 함수 만들기
const lowerString = (str) => str.toLowerCase();

// 함수 호출
const upperResult = upperString("kim");
console.log("🚀 ~ upperResult:", upperResult);

console.log("lowerString", lowerString("KIMdAsoM"));
