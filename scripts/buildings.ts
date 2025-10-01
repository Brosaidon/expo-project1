import type { Bank } from "@/context/bankProvider";

type BankKey = keyof Bank;
interface Building {
    id: string;
    name: string;
    bankRef: BankKey;
    category: string;
    gold: number;
    tree: number;
}

export const mockedBuildings: Building[] = 
[
  {
    id: "1",
    name: "Wizard’s Tower",
    bankRef: "wizardTower",
    category: "Magic",
    gold: 5,
    tree: 5,
  },
  {
    id: "2",
    name: "Blacksmith Forge",
    bankRef:"blacksmithForge",
    category: "Crafting",
    gold: 65,
    tree: 40,
  },
  {
    id: "3",
    name: "Elven Treehouse",
    bankRef:"elvenTreehouse",
    category: "Housing",
    gold: 10,
    tree: 50,
  },
  {
    id: "4",
    name: "Dwarven Mine",
    bankRef:"elvenTreehouse",
    category: "Resource",
    gold: 40,
    tree: 40,
  },
  {
    id: "5",
    name: "Dragon Stable",
    bankRef:"dragonStable",
    category: "Beast Taming",
    gold: 600,
    tree: 600,
  },
];
;