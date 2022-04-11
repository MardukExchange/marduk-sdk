"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeeEstimation = exports.createSwap = exports.broadcastClaimTransaction = exports.startReverseSwap = exports.swapStatus = exports.broadcastTransaction = exports.getSwaptransaction = exports.getTransaction = exports.getContracts = exports.getTimeout = exports.getNodes = exports.getRates = exports.getVersion = void 0;
const axios_1 = __importDefault(require("axios"));
// TODO https://github.com/pseudozach/boltz-frontend/blob/b472f3223067cfdbaacad4a3db7c3855dd0b90ba/src/actions/swapActions.js#L258-L258
const API_URL = 'https://api.marduk.exchange:9001';
const getVersion = () => {
    return axios_1.default.get(`${API_URL}/version`);
};
exports.getVersion = getVersion;
/**
 * To work with the instance one first has to know what pairs are supported and what kind of rates, limits and fees can be expected when creating a new swap.
 * To get that kind of information the following call is used
 */
const getRates = () => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/getpairs`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
};
exports.getRates = getRates;
const getNodes = () => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/getnodes`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
};
exports.getNodes = getNodes;
const getTimeout = () => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/gettimeout`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
};
exports.getTimeout = getTimeout;
const getContracts = () => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/getcontracts`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
};
exports.getContracts = getContracts;
/**
 * POST /gettransaction with request body currency and transactionId
 * @param currency
 * @param transactionId
 */
const getTransaction = (currency, transactionId) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .post(`${API_URL}/gettransaction`, {
            currency,
            transactionId,
        })
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
};
exports.getTransaction = getTransaction;
/**
 * POST /gettransactions with request body with id
 * @param id
 */
const getSwaptransaction = (id) => {
    return axios_1.default.post(`${API_URL}/getswaptransaction`, {
        id,
    });
};
exports.getSwaptransaction = getSwaptransaction;
/**
 * POST /gettransactions with request body with id
 * @param currency
 * @param transactionHex
 */
const broadcastTransaction = (currency, transactionHex) => {
    return axios_1.default.post(`${API_URL}/broadcasttransaction`, {
        currency,
        transactionHex,
    });
};
exports.broadcastTransaction = broadcastTransaction;
/**
 * Before being able to handle the status events of this method it is recommended to read: Swap lifecycle https://docs.boltz.exchange/en/latest/lifecycle/
 *
 * To query the status of a swap one can use this endpoint which returns a JSON object containing the status of the swap. All the possible status events are documented here.
 *
 * Requests querying the status of a swap have to be POST and contain a single value in its JSON encoded body:
 * @param id
 */
const swapStatus = (id) => {
    return axios_1.default.post(`${API_URL}/swapstatus`, {
        id,
    });
};
exports.swapStatus = swapStatus;
const startReverseSwap = () => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/startreverse`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
};
exports.startReverseSwap = startReverseSwap;
const broadcastClaimTransaction = (currency, claimTransaction, cb) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/broadcasttransaction`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
};
exports.broadcastClaimTransaction = broadcastClaimTransaction;
const createSwap = (currency, amount, cb) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/createswap`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
};
exports.createSwap = createSwap;
const getFeeEstimation = (currency, amount, cb) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/getfeeestimation`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
};
exports.getFeeEstimation = getFeeEstimation;
exports.default = { getRates: exports.getRates };
