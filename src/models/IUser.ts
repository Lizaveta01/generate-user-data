export interface IResponse {
    results: IUserResponse[];
    info: {
        seed: string;
    };
}

export interface IUserResponse {
    id: {
        value: string;
    };
    name: {
        first: string;
        last: string;
    };
    location: {
        country: string;
        city: string;
        street: {
            name: string;
            number: number;
        };
    };
    phone: string;
}

export interface IUser {
    id: string;
    name: string;
    location: string;
    phone: string;
    seed: string;
}
