import { createContext, ReactNode, useContext, useState } from "react";

interface Bank {
  gold: number;
  tree: number;
}

interface BankContextType {
  bank: Bank;
  increaseGold: () => void;
  increaseTree: () => void;
}

const BankContext = createContext<BankContextType | undefined>(undefined);

export function BankProvider({ children }: { children: ReactNode }) {
  const [bank, setBank] = useState<Bank>({ gold: 0, tree: 0 });

  function increaseGold() {
    setBank((prev) => ({ ...prev, gold: prev.gold + 1 }));
  }
  function increaseTree() {
    setBank((prev) => ({ ...prev, tree: prev.tree + 1 }));
  }

  return (
    <BankContext.Provider value={{ bank, increaseGold, increaseTree }}>
      {children}
    </BankContext.Provider>
  );
}

export function useBank() {
  const ctx = useContext(BankContext);
  if (!ctx) {
    throw new Error("useBank must be used inside a BankProvider");
  }
  return ctx;
}
