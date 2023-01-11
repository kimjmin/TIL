import crypto from "crypto"; // DefinitelyTyped 에서 설치 해 주지 않으면 오류남.

interface BlockShape {
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class BlockChain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const block = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(block);
  }
  public getBlocks() {
    // return this.blocks;    // 이렇게 하면 해킹 위험. blocks.getBlocks().push("xxx",222,"hacked");
    return [...this.blocks];
  }
}

const blockChain = new BlockChain();

blockChain.addBlock("First");
blockChain.addBlock("Second");
blockChain.addBlock("Third");

console.log(blockChain.getBlocks());
