import { createContext } from "react";

export const CoinContext = createContext();

const contextValue = {};

const CoinContextProvider = (props) => {
  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
