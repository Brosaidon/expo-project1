interface Trip {
    id: string;
    from: string;
    to: string;
    departure: Date;
    arrival: Date;
    price: number;
}

export const mockedTrips: Trip[] = 
[
  {
    id: "1",
    from: "Stockholm",
    to: "Gothenburg",
    departure: new Date("2025-09-20T08:30:00"),
    arrival: new Date("2025-09-20T11:15:00"),
    price: 450,
  },
  {
    id: "2",
    from: "Copenhagen",
    to: "Berlin",
    departure: new Date("2025-09-22T07:00:00"),
    arrival: new Date("2025-09-22T10:45:00"),
    price: 1200,
  },
  {
    id: "3",
    from: "Oslo",
    to: "Helsinki",
    departure: new Date("2025-09-25T14:00:00"),
    arrival: new Date("2025-09-25T16:30:00"),
    price: 950,
  },
  {
    id: "4",
    from: "London",
    to: "Paris",
    departure: new Date("2025-09-28T09:15:00"),
    arrival: new Date("2025-09-28T10:45:00"),
    price: 800,
  },
];
;