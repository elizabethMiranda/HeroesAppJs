import { heroes } from '../data/heroes';

export const getHeroesByName = ( name = ' ') => {
  
    if( name.length === 0) return [];

    name = name.toLocaleLowerCase().trim();

    return heroes.filter(dataHero => dataHero.superhero.toLocaleLowerCase().includes( name ));
}
