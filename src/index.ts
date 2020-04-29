interface Human {
  name: String;
  age: Number;
  gender: String;
}

const person = {
  name: "kang",
  age: 26,
  gender: "male",
};

// 인자를 따로 따로 받을 땐 각각에 대해서 타입을 지정할 수 있었습니다. 함수에 객체를 넘기는 경우, 받아오는 인자는 한개 뿐이지만 담긴 정보는 여러개 이므로 인터페이스를 생성하여 타입들을 지정해 놓을 수 있습니다.
const sayHi = (person: Human): String => {
  return `Hello ${person.name}, you're ${person.age} and you're ${person.gender}`;
};

console.log(sayHi(person));

// TypeScript에게 모듈임을 알립니다.
export {};
