"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRates = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://api.marduk.exchange:9001';
function getRates() {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/getpairs`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
}
exports.getRates = getRates;
exports.default = { getRates };
