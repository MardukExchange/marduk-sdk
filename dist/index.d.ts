export declare const getVersion: () => Promise<import("axios").AxiosResponse<any, any>>;
/**
 * To work with the instance one first has to know what pairs are supported and what kind of rates, limits and fees can be expected when creating a new swap.
 * To get that kind of information the following call is used
 */
export declare const getRates: () => Promise<object>;
export declare const getNodes: () => Promise<object>;
export declare const getTimeout: () => Promise<object>;
export declare const getContracts: () => Promise<object>;
/**
 * POST /gettransaction with request body currency and transactionId
 * @param currency
 * @param transactionId
 */
export declare const getTransaction: (currency: string, transactionId: string) => Promise<object>;
/**
 * POST /gettransactions with request body with id
 * @param id
 */
export declare const getSwaptransaction: (id: string) => Promise<import("axios").AxiosResponse<any, any>>;
/**
 * POST /gettransactions with request body with id
 * @param currency
 * @param transactionHex
 */
export declare const broadcastTransaction: (currency: string, transactionHex: string) => Promise<import("axios").AxiosResponse<any, any>>;
/**
 * Before being able to handle the status events of this method it is recommended to read: Swap lifecycle https://docs.boltz.exchange/en/latest/lifecycle/
 *
 * To query the status of a swap one can use this endpoint which returns a JSON object containing the status of the swap. All the possible status events are documented here.
 *
 * Requests querying the status of a swap have to be POST and contain a single value in its JSON encoded body:
 * @param id
 */
export declare const swapStatus: (id: string) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const startReverseSwap: () => Promise<object>;
export declare const broadcastClaimTransaction: (currency: string, claimTransaction: string, cb: string) => Promise<object>;
export declare const createSwap: (currency: string, amount: string, cb: string) => Promise<object>;
export declare const getFeeEstimation: (currency: string, amount: string, cb: string) => Promise<object>;
declare const _default: {
    getRates: () => Promise<object>;
};
export default _default;
