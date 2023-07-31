import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroById = (id) => {

    return heroes.find(dataHero => dataHero.id === id);
}
