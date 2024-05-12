import {heroes} from "../data/heroes.js";

export const GetHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}
