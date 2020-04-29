// 많은 타입과 함수들이 나올땐 타입스크립트의 장점이 잘 발휘 됩니다. 들어와서는 안될 자료들이 들어오는 것을 막을 수 있기 때문입니다.

// 블록체인의 기본 단위인 블록 클래스를 작성합니다.
class Block {
  public index: Number;
  public hash: String;
  public previousHash: String;
  public data: String;
  public timestamp: Number;

  constructor(
    index: Number,
    hash: String,
    previousHash: String,
    data: String,
    timestamp: Number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

// 첫 블록 생성
const genesisBlock: Block = new Block(0, "20202020202", "", "Hello", 123456);

// 블록체인이라는 것은 블록들이 연결된 것 입니다. 블록체인의 형태는 블록의 배열입니다.
let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

// TypeScript에게 모듈임을 알립니다.
export {};
