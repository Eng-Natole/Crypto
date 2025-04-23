import { createContext, useEffect, useState } from "react";

// Create the context
export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  // Fetch all coins from CoinGecko
  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-z1dctc9JxQTzaLs5jZ4YajqR", // Make sure no extra spaces!
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );
      const data = await response.json();
      setAllCoin(data);
    } catch (err) {
      console.error("Error fetching coin data:", err);
    }
  };

  // Refetch data whenever the selected currency changes
  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  // Context value to share
  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  // Wrap children with context provider
  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
