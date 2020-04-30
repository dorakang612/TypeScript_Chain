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

  // 블록의 해쉬를 계산하는 메서드입니다.
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).tostring();

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

// 클래스 내에 static 메서드로 선언했기 때문에, BLock 객체를 생성하지 않아도 사용가능합니다.
Block.calculateBlockHash(0, "20202020", 123456, "Hello");

// 첫 블록 생성
const genesisBlock: Block = new Block(0, "20202020202", "", "Hello", 123456);

// 블록체인이라는 것은 블록들이 연결된 것 입니다. 블록체인의 형태는 블록의 배열입니다.
let blockchain: Block[] = [genesisBlock];

// 블록체인을 반환해주는 메서드입니다.
const getBlockchain = (): Block[] => blockchain;

// 가장 최근의 블록을 반환해주는 메서드입니다.
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

// timeStamp를 생성하는 메서드입니다.
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

// TypeScript에게 모듈임을 알립니다.
export {};
