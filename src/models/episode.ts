import { ICharacter } from "./character";

export interface IEpisode{
    id: string,
    name: string,
    episode: string,
    characters: [ICharacter]
}