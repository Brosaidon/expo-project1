interface Trip {
    id: string;
    from: string;
    to: string;
    departure: Date;
    arrival: Date;
    price: number;
}

export const mockedTrips: Trip[] = [];