import React, { useState } from "react";

export const Context = React.createContext(null);

export const ContextProvider = ({ children }) => {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [jackpot, setJackpot] = useState(0);
  const [winners, setWinners] = useState({});

  const store = {
    signIn: {
      value: isSignInOpen,
      setValue: setSignInOpen,
    },
    account: {
      address,
      setAddress,
    },
    balance: {
      balance,
      setBalance,
    },
    lottery: {
      jackpot,
      setJackpot,
    },
    winners: {
      winners,
      setWinners,
    },
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
