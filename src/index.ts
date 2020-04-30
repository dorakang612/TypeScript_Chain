// 많은 타입과 함수들이 나올땐 타입스크립트의 장점이 잘 발휘 됩니다. 들어와서는 안될 자료들이 들어오는 것을 막을 수 있기 때문입니다.

// 타입 스크립트에서 import하는 방식입니다.
// 해쉬 계산을 위한 패키지입니다.
import * as CryptoJS from "crypto-js";

// 블록체인의 기본 단위인 블록 클래스를 작성합니다.
class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // 블록의 해쉬를 계산하는 함수입니다.
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  // 인자로 주어진 블럭의 구조가 유효한지 확인합니다.
  static validateStructure = (aBlock: Block): boolean => {
    return (
      typeof aBlock.index === "number" &&
      typeof aBlock.hash === "string" &&
      typeof aBlock.previousHash === "string" &&
      typeof aBlock.timestamp === "number" &&
      typeof aBlock.data === "string"
    );
  };
  //
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
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
let blockchain: Block[] = [genesisBlock];

// 블록체인을 반환해주는 함수입니다.
const getBlockchain = (): Block[] => blockchain;

// 가장 최근의 블록을 반환해주는 함수입니다.
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

// timeStamp를 생성하는 함수입니다.
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

// 새로운 블럭을 생성하는 함수
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock ? previousBlock.index + 1 : 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimeStamp,
    data
  );

  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimeStamp
  );

  // 생성한 새로운 블럭을 블록체인에 연결합니다.
  addBlock(newBlock);

  return newBlock;
};

// 블록의 해쉬 값을 계산하는 함수입니다.
const getHashforBlock = (aBlock: Block): string =>
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

// 블록의 구조와 가진 값들이 유효한지 확인하는 함수입니다.
const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (candidateBlock.hash !== getHashforBlock(candidateBlock)) {
    return false;
  } else {
    return true;
  }
};

// 블록 체인에 블록을 추가하는 함수입니다.
const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};

createNewBlock("second Block");
createNewBlock("third Block");
createNewBlock("fourth Block");

console.log(blockchain);

// TypeScript에게 모듈임을 알립니다.
export {};
