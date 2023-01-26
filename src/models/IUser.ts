export interface IUser {
    id: string;
    name: {
        first: string;
        last: string;
    };
    location:{
        country: string;
        city: string;
        street: {
            name: string;
            number: number;
        }
    },
    phone: string;
}