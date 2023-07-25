import { getHeroesByPublisher } from "../helpers"


export const HeroList = ({publisher}) => {
    console.log('datos recibidos');
    console.log(publisher);
    const heroes = getHeroesByPublisher(publisher);

  return (
    <div>
        {
            heroes.map(DatoHero =>
                <li key={DatoHero.id}>
                    {DatoHero.superhero}
                </li>
                )
        }
    </div>
  )
}
