const name = "Kang",
  age = 26,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

// 만약 sayHi()정의 시 gender에 ?를 붙이지 않았다면, javaScipt에서는 유연하게 undefined라고 하며 넘어 가겠지만, TypeScript는 컴파일을 못하게 했을 겁니다.
sayHi(name, age);

sayHi(name, age, gender);

// TypeScript에게 모듈임을 알립니다.
export {};
