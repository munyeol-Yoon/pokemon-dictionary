interface PokemonDetailSectionProps {
  title: string;
  data: { name: string; korean_name: string }[];
}

function PokemonDetailSection({ title, data }: PokemonDetailSectionProps) {
  return (
    <section>
      <p>
        {title} :
        {data.map((item, idx) => (
          <span key={idx}>{item.korean_name}</span>
        ))}
      </p>
    </section>
  );
}

export default PokemonDetailSection;
