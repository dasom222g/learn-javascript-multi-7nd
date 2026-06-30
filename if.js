// 조건문
// 목표: 점수가 60점 이상이면 "합격"출력
// 점수가 60점 이상이면 -> 점수 변수가 60보다 크다는게 true이면

const score = 78;

// if (score >= 60) {
//   // 조건식이 true면 실행할 로직
//   console.log("합격");
// } else {
//   console.log("불합격");
// }

// 삼항 연산자
console.log(score >= 60 ? "합격" : "불합격");

console.log("종료");

// 있다: 1번
// 없다: 0번

// 등급 (else if)
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "D";
}

console.log(`${grade}등급입니다`);

// 미션: 개발자 레벨테스트

const checkLebel = () => {
  /**
   *1. 이름 입력
    2. HTML 점수 입력
    3. CSS 점수 입력
    4. JavaScript 점수 입력
    5. 평균 점수 계산
    6. 평균에 따라 개발자 등급 출력
   */

  const userName = window.prompt("이름을 입력해주세요");
  const htmlScore = window.prompt("HTML점수를 입력해주세요");
  const cssScore = window.prompt("CSS점수를 입력해주세요");
  const javascriptScore = window.prompt("JAVASCRIPT점수를 입력해주세요");

  const averageScore = average(htmlScore, cssScore, javascriptScore);
  console.log("🚀 ~ averageScore:", averageScore);

  // 등급 설정
  let level = "";
  if (averageScore >= 90) {
    level = "개발자 마스터";
  } else if (averageScore >= 70) {
    level = "실전 투입 가능";
  } else if (averageScore >= 50) {
    level = "성장 중인 개발자";
  } else {
    level = "기초부터 다시 다지기";
  }

  return `${userName}님 레벨: ${level}`;
};

const average = (num1, num2, num3) => {
  // 평균 계산
  const total = Number(num1) + Number(num2) + Number(num3);
  console.log("🚀 ~ total:", total);
  return total / 3;
};

// 레벨 테스트 함수 호출
// const developerLevel = checkLebel();
// console.log("🚀 ~ developerLevel:", developerLevel);
