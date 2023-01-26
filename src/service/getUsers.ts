/* eslint-disable no-console */

import { IResponse, IUser } from '../models/IUser';

export const getUsers = async (region: string, count = 10): Promise<IUser[]> => {
    const res = await fetch(`https://randomuser.me/api/?results=${count}&nat=${region}`);
    const responce: IResponse = await res.json();
    const seed = responce.info.seed;
    const structuredData: IUser[] = responce.results.map((user) => {
        return {
            id: user.id.value,
            name: `${user.name.first} ${user.name.last}`,
            location: `${user.location.country} ${user.location.city} ${user.location.street.name} ${user.location.street.number}`,
            phone: user.phone,
            seed: seed,
        };
    });
    console.log(structuredData);
    return structuredData;
};
