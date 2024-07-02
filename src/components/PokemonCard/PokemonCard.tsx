import { TPokemon } from "@/types/pokemon.type";
import Image from "next/image";

interface PokemonCardProps {
  pokemon: TPokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
      <div className="relative aspect-[4/3]">
        <Image
          className="object-cover"
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
          fill
        />
      </div>
      <h5>{pokemon.korean_name}</h5>
      <p>도감번호: {pokemon.id}</p>
    </ul>
  );
}

export default PokemonCard;
