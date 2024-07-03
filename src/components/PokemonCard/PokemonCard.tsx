import { TPokemon } from "@/types/pokemon.type";
import Image from "next/image";

interface PokemonCardProps {
  pokemon: TPokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <li className="border border-gray m-2 p-4 rounded-lg shadow-md">
      <div className="relative aspect-[4/3]">
        <Image
          className="object-cover"
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
          sizes="100%"
          fill
          priority
        />
      </div>
      <h5 className="text-xl font-semibold">{pokemon.korean_name}</h5>
      <p className="text-sm">도감번호: {pokemon.id}</p>
    </li>
  );
}

export default PokemonCard;
