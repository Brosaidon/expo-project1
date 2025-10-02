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
  buyBuilding: (ref: BankKey, cost: { gold: number; tree: number }) => void; //varför måste det stå number?
}

const BankContext = createContext<BankContextType | undefined>(undefined);

export type BankKey = keyof Bank;
export function BankProvider({ children }: { children: ReactNode }) {
  const [bank, setBank] = useState<Bank>({ gold: 0, tree: 0 });

  function increaseGold() {
    setBank((prev) => ({ ...prev, gold: prev.gold + 1 }));
  }
  function increaseTree() {
    setBank((prev) => ({ ...prev, tree: prev.tree + 1 }));
  }

  function buyBuilding(ref: BankKey, cost: { gold: number; tree: number }) {
    setBank((prev) => {
      if (prev[ref] || prev.gold < cost.gold || prev.tree < cost.tree) {
        return prev;
      }
      return {
        ...prev,
        [ref]: true,
        gold: prev.gold - cost.gold,
        tree: prev.tree - cost.tree,
      };
    });
  }

  return (
    <BankContext.Provider
      value={{ bank, increaseGold, increaseTree, buyBuilding }}
    >
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
