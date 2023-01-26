import { IUser } from '../models/IUser';

export const getCsv = (data: IUser[]) => {
    if (!data[0]) return [['generate your seed first', 'bb']];
    const csvHeaders = Object.keys(data[0]);

    return [csvHeaders, ...data.map((fakePerson) => Object.values(fakePerson))];
};
