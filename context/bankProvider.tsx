import { createContext, ReactNode, useContext, useState } from "react";

export interface Bank {
  gold: number;
  tree: number;
  wizardTower?: boolean;
  blacksmithForge?: boolean;
  elvenTreehouse?: boolean;
  dwarvenMine?: boolean;
  dragonStable?: boolean;
}

interface BankContextType {
  bank: Bank;
  increaseGold: () => void;
  increaseTree: () => void;
  buy: (ref: string) => void;
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

  function buy(ref: string) {
    setBank((prev) => ({
      ...prev,
      [ref]: true,
    }));
  }

  return (
    <BankContext.Provider value={{ bank, increaseGold, increaseTree, buy }}>
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
