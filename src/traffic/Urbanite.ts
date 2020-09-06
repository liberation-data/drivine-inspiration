import { Metro } from '@/traffic/Metro';
import { Transform } from 'class-transformer';

/**
 * One of the sassy inhabitants of Saxeburge (perhaps even Moongirl, herself) who travels across the metropolis and
 * frequents favorite haunts.
 */
export class Urbanite {

    readonly id: string;

    readonly firstName: string;

    readonly lastName: string;

    @Transform((date: Date) => date.valueOf(), { toPlainOnly: true })
    @Transform((value: number) => new Date(value), { toClassOnly: true })
    readonly dateOfBirth: Date;

    readonly favoriteHaunts: Metro[];

    constructor(id: string, firstName: string, lastName: string, dateOfBirth: Date, favoriteHaunts: Metro[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.favoriteHaunts = favoriteHaunts;
    }

}
