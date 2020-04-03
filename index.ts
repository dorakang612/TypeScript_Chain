const name = "Kang",
  age = 26,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);
// 만약 sayHi()정의 시 gender에 ?를 붙이지 않았다면 TypeScript는 컴파일을 못하게 했을 겁니다.
sayHi(name, age, gender);
export {};
