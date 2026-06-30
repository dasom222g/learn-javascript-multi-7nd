// 반복문

/**
 * 세가지 구성요소
 * 1. 초기화 - 1번만 실행
 * 2. 반복 조건식
 * 3. 증감식
 */

let i;
// 10번 반복 실행
for (i = 0; i < 10; i++) {
  // 반복 조건식이 true인 동안 실행할 반복 로직
  console.log(`${i}번째 실행중..`);
}

console.log("i", i); // 9 -> 10

// 0번째 -> 9번째

// 미션: 10부터 1까지 카운트
for (let i = 10; i > 0; i--) {
  console.log(`count: ${i}`);
}

const animals = ["dog", "cat", "puppy", "pig"];

for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}❤️`);
  animals[i]; // 데이터타입: string
}

animals.forEach((value, index) => {
  // 각 요소들을 순회하면서 실행 반복 로직
  console.log(`${index}번째: ${value}✅`);
});

// map: 기존배열을 조작하여 새로운 배열 리턴
const names = ["alice", "bob", "david", "kelly", "chutzrit"];

// 대문자로 변환된 배열
const upperNames = names.map((value) => value.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames);

// 이모지 추가된 배열
const emogiNames = names.map((name) => `${name}👌🏻`);
console.log("🚀 ~ emogiNames:", emogiNames);
console.log("🚀 ~ names:", names);

// filter: 배열안의 요소들 중 조건을 만족하는 요소들로 새로운 배열 리턴
// 조건 만족하지 않으면 빈배열 리턴

// 글자수가 5자 이상인 요소들만 모은 배열
const filterNames = names.filter((name) => name.length >= 5);
console.log("🚀 ~ filterNames:", filterNames);

// find: 배열안의 요소들 중 조건을 만족하는 첫번째 요소 하나를 리턴.
// 조건 만족하지 않으면 undefined리턴
const findNames = names.find((name) => name.length >= 5);
console.log("🚀 ~ findNames:", findNames);

// some/every: 배열안의 요소들 중 조건을 만족하는지에 대한 bool리턴
const someNames = names.some((name) => name.length >= 5);
console.log("🚀 ~ someNames:", someNames);

const everyNames = names.every((name) => name.length >= 5);
console.log("🚀 ~ everyNames:", everyNames);
