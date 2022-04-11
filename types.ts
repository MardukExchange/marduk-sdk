export interface GetPairsResponse {
  info: string[],
  warnings: string[],
  pairs: {
    [key: string]: {
      rate: number,
      limits: {
        maximal: number,
        minimal: number,
        maximalZeroConf: {
          baseAsset: number,
          quoteAsset: number
        }
      },
      fees: {
        percentage: number,
        minerFees: {
          baseAsset: {
            normal: number,
            reverse: {
              claim: number,
              lockup: number
            }
          },
          quoteAsset: {
            normal: number,
            reverse: {
              claim: number,
              lockup: number
            }
          }
        }
      },
      hash: number
    }
  }

}

export interface GetNodesResponse {
  nodes: {
    [key: string]: {
      nodeKey: string,
      uris: string[]
    }
  }
}

export interface GetTimeoutResponse {
  timeouts: {
    [key: string]: {
      base: number,
      quote: number
    }
  }
}

export interface GetContractsResponse {
  ethereum: {
    network: {
      chainId: number
    },
    swapContracts: {
      EtherSwap: string,
      ERC20Swap: string
    },
    tokens: {
      [key: string]: string
    }
  }
}

export interface GetFeeEstimationResponse {
    [key: string]: number
}

export interface GetContractsResponse {
  ethereum: {
    network: {
      chainId: number
    },
    swapContracts: {
      EtherSwap: string,
      ERC20Swap: string
    },
    tokens: {
      [key: string]: string
    }
  }
}

export interface GetTransactionResponse {
  transactionHex: string,
}

export interface BroadcastTransactionResponse {
  transactionId: string,
}


export interface GetSwapTransactionResponse {
  transactionHex: string,
  timeoutBlockHeight: number,
  timeoutEta: number // If the HTLC has not timed out yet, there will be an additional value in the response: UNIX timestamp at which the HTLC is expected to time out
}

export interface GetSwapStatusResponse {
  status: string, // status of the swap
  transaction: {
    id: string,
    hex: string,
    eta: number //  if the status is transaction.mempool, this value is the estimated time of arrival (ETA) in blocks of when the transaction will be confirmed (only set for transactions on UTXO based chains)
  }
  zeroConfRejected: boolean // set to true for Swaps with the status transaction.mempool and a lockup transaction that is not eligible for 0-conf
  failureReason: string // set if the status indicates that the Swap failed and the status itself would be ambiguous
}

export interface GetSwapRatesResponse {
  invoiceAmount: string
}

export interface SetInvoiceSwap {
  acceptZeroConf: boolean,
  expectedAmount: number,
  bip21: string
}