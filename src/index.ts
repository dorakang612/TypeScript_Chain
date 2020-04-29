// TypeScript를 통해서 인자마다 어떤 타입이 들어올지를 정할 수 있고, 함수가 어떤 값을 리턴할 지도 정해 놓을 수 있습니다.
const sayHi = (name: String, age: Number, gender: String): String => {
  return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};

console.log(sayHi("Kang", 26, "Male"));

// TypeScript에게 모듈임을 알립니다.
export {};
