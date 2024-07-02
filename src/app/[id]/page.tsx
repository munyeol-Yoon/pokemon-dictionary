import axios from "axios";
import Image from "next/image";

type PokemonParam = {
  params: {
    id: string;
  };
};

const getPokemonById = async (id: string) => {
  const response = await axios.get(`${process.env.HOST}/api/pokemons/${id}`);
  return response.data;
};

async function PokemonDetail({ params }: PokemonParam) {
  const pokemon = await getPokemonById(params.id);
  console.log(pokemon);

  return (
    <div>
      <h1>{pokemon.korean_name}</h1>
      <div>
        <Image
          className="object-cover"
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
          fill
        />
      </div>
      <h3>이름 : {pokemon.korean_name}</h3>
      <div>
        <p>
          키 : {pokemon.height} 무게: {pokemon.weight}
        </p>
      </div>
      <div>
        <p>
          기술 :
          {pokemon.abilities.map((pokemonAbility: any, idx: number) => (
            <span key={idx}>{pokemonAbility.ability.korean_name}</span>
          ))}
        </p>
      </div>
      <div>
        <p>
          타입 :
          {pokemon.types.map((pokemonType: any, idx: number) => (
            <span key={idx}>{pokemonType.type.korean_name}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default PokemonDetail;
