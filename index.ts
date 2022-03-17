import axios from 'axios';

const API_URL: string = 'https://api.marduk.exchange:9001';

export function getRates(): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/getpairs`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export default { getRates };