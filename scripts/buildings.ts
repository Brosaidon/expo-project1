interface Building {
    id: string;
    name: string;
    category: string;
    price: number;
}

export const mockedBuildings: Building[] = 
[
  {
    id: "1",
    name: "Wizard’s Tower",
    category: "Magic",
    price: 500,
  },
  {
    id: "2",
    name: "Blacksmith Forge",
    category: "Crafting",
    price: 250,
  },
  {
    id: "3",
    name: "Elven Treehouse",
    category: "Housing",
    price: 300,
  },
  {
    id: "4",
    name: "Dwarven Mine",
    category: "Resource",
    price: 400,
  },
  {
    id: "5",
    name: "Dragon Stable",
    category: "Beast Taming",
    price: 6000,
  },
];
;