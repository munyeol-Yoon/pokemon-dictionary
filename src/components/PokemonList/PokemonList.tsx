"use client";

import { TPokemon } from "@/types/pokemon.type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
    <section>
      <h1>포켓몬 도감</h1>
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </section>
  );
}

export default PokemonList;
