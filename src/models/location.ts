import { ICharacter } from "./character";

export interface ILocation{
    dimension: string,
    id: string,
    name: string
    residents: [ICharacter]
    type: string
}