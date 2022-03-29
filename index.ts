import axios from 'axios';
// TODO https://github.com/pseudozach/boltz-frontend/blob/b472f3223067cfdbaacad4a3db7c3855dd0b90ba/src/actions/swapActions.js#L258-L258

const API_URL: string = 'https://api.marduk.exchange:9001';

export const getRates = (): Promise<object> =>  {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/getpairs`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}


export const startReverseSwap = () :  Promise<object> =>  {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/startreverse`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export const broadcastClaimTransaction = (currency: string, claimTransaction: string, cb: string) :  Promise<object> =>  {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/broadcasttransaction`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export const createSwap = (currency: string, amount: string, cb: string) :  Promise<object> =>  {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/createswap`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export const swapStatus = (currency: string, cb: string) :  Promise<object> =>  {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/swapstatus`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export const getFeeEstimation = (currency: string, amount: string, cb: string) :  Promise<object> =>  {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/getfeeestimation`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export default { getRates };