import PokemonDetailSection from "@/components/PokemonDetailSection";
import {
  TPokemonAbilities,
  TPokemonMoves,
  TPokemonTypes,
} from "@/types/pokemon.type";
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

  return (
    <div className="border border-black flex flex-col items-center">
      <h1 className="text-center text-3xl font-semibold p-5">
        {pokemon.korean_name}
      </h1>
      <div className="relative aspect-[4/3] flex justify-center items-center p-2">
        <Image
          className="border border-gray rounded-md"
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
          width={150}
          height={150}
        />
      </div>
      <h3>이름 : {pokemon.korean_name}</h3>
      <div>
        <p>
          키 : {pokemon.height} 무게: {pokemon.weight}
        </p>
      </div>
      <PokemonDetailSection
        title="특성"
        data={pokemon.abilities.map(
          (ability: TPokemonAbilities) => ability.ability
        )}
      />
      <PokemonDetailSection
        title="타입"
        data={pokemon.types.map((type: TPokemonTypes) => type.type)}
      />
      <PokemonDetailSection
        title="기술"
        data={pokemon.moves.map((move: TPokemonMoves) => move.move)}
      />
    </div>
  );
}

export default PokemonDetail;
