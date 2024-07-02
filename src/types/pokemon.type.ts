export type TPokemonTypes = {
  type: {
    name: string;
    korean_name: string;
  };
};

export type TPokemonAbilities = {
  ability: {
    name: string;
    korean_name: string;
  };
};

export type TPokemonMoves = {
  move: {
    name: string;
    korean_name: string;
  };
};

export type TPokemon = {
  id: number;
  name: string;
  korean_name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: TPokemonTypes[];
  abilities: TPokemonAbilities[];
  moves: TPokemonMoves[];
};
