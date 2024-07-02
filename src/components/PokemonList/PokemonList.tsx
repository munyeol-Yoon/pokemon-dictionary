"use client";

import { TPokemon } from "@/types/pokemon.type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import PokemonCard from "../PokemonCard";

const fetchPokemonData = async (): Promise<TPokemon[]> => {
  const response = await axios.get("/api/pokemons");
  return response.data;
};

function PokemonList() {
  const {
    data: pokemons,
    isLoading,
    isError,
  } = useQuery<TPokemon[]>({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemonData,
  });

  // TODO 로딩바 추가
  if (isLoading) return <div>loading</div>;

  if (isError) return <div>error</div>;

  return (
    <section className="flex flex-col">
      <h1 className="text-center text-3xl font-semibold p-5">포켓몬 도감</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {pokemons?.map((pokemon) => (
          <Link href={`/${pokemon.id}`} key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default PokemonList;
