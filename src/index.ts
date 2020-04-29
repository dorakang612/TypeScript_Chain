// 인터페이스는 자바스크립트로 컴파일되지 않습니다. 드물게 자바스크립트에 인터페이스 코드가 필요하다면, 인터페이스 대신 클래스를 사용합니다.
class Human {
  // public으로 변수들을 지정했기 때문에 클래스 외부에서도 접근 가능합니다.
  // public이 아닌 private으로 지정한다면, 해당 변수는 해당 클래스 안에서만 사용 가능합니다.
  public name: String;
  public age: number;
  public gender: string;

  // 생성자. 클래스의 객체가 만들어질 때 호출되는 메서드.
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// kang은 Human클래스의 객체.
const kang = new Human("kang", 26, "male");

const sayHi = (person: Human): String => {
  return `Hello ${person.name}, you're ${person.age}, and you're a ${person.gender}`;
};

console.log(sayHi(kang));

// TypeScript에게 모듈임을 알립니다.
export {};
