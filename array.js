// const mon = "월요일";
// const tue = "화요일";
// const wen = "수요일";
// const thur = "목요일";

// 배열
const daysOfWeek = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
console.log("🚀 ~ daysOfWeek:", daysOfWeek);

const today = daysOfWeek[1];
console.log("🚀 ~ today:", today);

// 미션: 내가 제일 좋아하는 요일 뽑아와서 콘솔에 찍어보기

const student = {
  name: "김상호",
  mbti: "INTP",
  favoriteColor: ["green", "yellow", "brown", "purple"],
};
console.log("🚀 ~ student:", student);

// 객체에서 이름 뽑아오기
console.log("student.name", student.name);

// 미션: mbti, "brown" 값 뽑아와서 콘솔에 찍기
const abc = "mbti";
console.log("mbti", student[abc]);
console.log(student.favoriteColor[2]);
console.log("favoriteColor size:", student.favoriteColor.length);
