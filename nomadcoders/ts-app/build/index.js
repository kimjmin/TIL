"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var Block = /** @class */ (function () {
    function Block(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    Block.calculateHash = function (prevHash, height, data) {
        var toHash = "".concat(prevHash).concat(height).concat(data);
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    };
    return Block;
}());
var BlockChain = /** @class */ (function () {
    function BlockChain() {
        this.blocks = [];
    }
    BlockChain.prototype.getPrevHash = function () {
        if (this.blocks.length === 0)
            return "";
        return this.blocks[this.blocks.length - 1].hash;
    };
    BlockChain.prototype.addBlock = function (data) {
        var block = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(block);
    };
    BlockChain.prototype.getBlocks = function () {
        // return this.blocks;    // 이렇게 하면 해킹 위험. blocks.getBlocks().
        return __spreadArray([], this.blocks, true);
    };
    return BlockChain;
}());
var blockChain = new BlockChain();
blockChain.addBlock("First");
blockChain.addBlock("Second");
blockChain.addBlock("Third");
console.log(blockChain.getBlocks());
