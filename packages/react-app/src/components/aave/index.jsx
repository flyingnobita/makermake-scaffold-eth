import React from "react";
import { Button } from "antd";

import {
  useExchangePrice,
  useGasPrice,
  useUserProvider,
  useContractLoader,
  useContractReader,
  useEventListener,
  useBalance,
  useExternalContractLoader,
} from "../../hooks";

import {
  AaveProtocolDataProvider_ADDRESS,
  AaveProtocolDataProvider_ABI,
  AaveOracle_ADDRESS,
  AaveOracle_ABI,
  AaveLendingPoolAddressesProvider_ADDRESS,
  AaveLendingPoolAddressesProvider_ABI,
  AaveLendingPool_ADDRESS,
  AaveLendingPool_ABI,
} from "./abi";

const ethers = require("ethers");

function get() {
  const a = "abc";
  console.log(AaveLendingPool_ABI);
  return a;
}

export default function Aave(provider, ethPrice) {
  console.log(provider);
  console.log("ethPrice: " + ethPrice);
  // const signer = provider.getSigner();
  // const aaveLendingPoolContract = new ethers.Contract(AaveLendingPool_ADDRESS, AaveLendingPool_ABI, provider);
  // const aaveLendingPoolContract = useExternalContractLoader(provider, AaveLendingPool_ADDRESS, AaveLendingPool_ABI);

  return (
    <div>
      dfdkj fdd; kdjfd dfkjd
      <Button
        type="primary"
        onClick={() => {
          get();
        }}
      >
        Button 1
      </Button>
    </div>
  );
}
