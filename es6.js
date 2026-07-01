// Logical Operator: 논리적인 true, false를 판단하여 반환

/**
 * 1. And (&&)
 * 2. Or (||)
 * 3. Not (!)
 */

const user = {
  isLoggedIn: false,
  role: "admin", // 다른 값으로는 "guest", "user" 가 있음
};

// 관리자 페이지 접근 여부 확인
/**
 * 조건1: 로그인 된 상태일 것.
 * 조건2: role이 관리자일 것.
 */

if (user.isLoggedIn && user.role === "admin") {
  // 관리자 페이지 접근 가능한 상태
  console.log("✅ 관리 페이지 접근 가능");
} else {
  // 관리자 페이지 접근 불가능한 상태
  console.log("❌ 관리 페이지 접근 불가능");
}

// or연산자
// 조건: 성인(18세 이상)인지 혹은 부모의 동의를 받았는지 확인
const person = {
  age: 16,
  hasParentalConsent: false,
};

// 삼항 연산자

// 조건 ? value1 : value2

const guideText =
  person.age >= 18 || person.hasParentalConsent
    ? "✅ 서비스 접근 가능"
    : "❌ 서비스 접근 불가능";

console.log(guideText);

// not연산자: 반전
/**
 * 자바스크립에서 false로 간주되는 것들
 * 1. 0
 * 2. null
 * 3. undefined
 * 4. "" <- 빈문자열
 */

const userInput = "     f      ";

// 사용자 입력값 비어있는지 체크
if (!userInput.trim()) {
  // 입력값이 비어있는 경우
  console.log("입력값이 비어있습니다. 값을 입력하세요");
}

// 미션: 아래 조건에 모두 부합하는 경우 콘텐츠 배포
// 조건 1: 티스토리 블로그에 로그인 세션이 있는경우
// 조건 2: AI가 작성한 글의 품질 게이트 점수가 95점이상인 경우

const publishData = {
  isBlogLogginSession: true, // 블로그 로그인 세션 있는지 여부
  finalScore: 87,
};

if (publishData.isBlogLogginSession && publishData.finalScore >= 95) {
  console.log("배포를 진행합니다..");
} else {
  console.log("다시 확인하고 배포 요청하세요");
}

// Default Parameter: 파라미터 기본값 지정
const greeting = (name = "사용자") => {
  console.log(`${name}님, 반갑습니다`);
};

greeting();
greeting("노태호");

// Object Destrcturin 구조분해 할당
// 배열, 객체에서 각각의 값이나 속성을 분해하여 손쉽게 별도의 변수에 담아주는 것

const colors = ["red", "green", "blue"];

const firstColor = colors[0];
const secondColor = colors[1];
const thurdColor = colors[2];

// 구조분해 할당
const [second, first] = ["red", "green", "blue"];

console.log("🚀 ~ first:", first);
console.log("🚀 ~ second:", second);

console.log("🚀 ~ firstColor:", firstColor);
console.log("🚀 ~ secondColor:", secondColor);

const guest = {
  userName: "후츠릿",
  id: "chutzrit",
  age: 11,
};

// const userName = guest.userName;
// const userId = guest.id;
// const userAge = guest.age;

const { userName, id: userId } = guest;
console.log("🚀 ~ userName:", userName);
console.log("🚀 ~ userId:", userId);

// Spread Syntax: 배열이나 객체를 개별요소로 분해하거나 결합할때 사용
const newColors = ["brown", ...colors, "purple", "beige"];
console.log("🚀 ~ newColors:", newColors);

const newGuest = {
  ...guest,
  mbti: "INTP",
  phone: "01087838354787",
  userName: "후츠릿 -> 수정",
};
console.log("🚀 ~ newGuest:", newGuest);

// 미션: 오늘의 할일 추가
// todoItem에 오늘 할일 데이터 추가, isComplete의 값을 true로 변경하는 새로운 객체 만들기
// 조건: spread syntax 문법으로 만들것
const todoItem = {
  id: 1,
  isComplete: false,
};
