import { cva } from "class-variance-authority";

type PokemonTagProps = {
  intent?: "primary" | "secondary" | "rounded";
  size?: "small" | "medium";
  outline?: boolean;
};

type PokemonDetailSectionProps = {
  title: string;
  data: { name: string; korean_name: string }[];
} & PokemonTagProps;

const tag = cva(
  "rounded border font-semibold hover:brightness-90 active:brightness-75 text-center m-0.5",
  {
    variants: {
      intent: {
        primary: "bg-green-500 text-white border-green-500",
        secondary: "bg-pink-500 text-white border-pink-500",
        rounded: "text-sky-500 border-sky-500 rounded-2xl",
      },
      size: {
        small: "px-3 py-1.5 text-sm",
        medium: "px-4 py-2 text-[15px]",
      },
      outline: {
        true: "bg-white",
        false: "",
      },
    },
    compoundVariants: [
      { intent: "primary", outline: true, className: "text-green-500" },
      { intent: "secondary", outline: true, className: "text-pink-500" },
      { intent: "rounded", outline: true, className: "text-sky-500" },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
      outline: false,
    },
  }
);

function PokemonDetailSection({
  title,
  data,
  intent,
  size,
  outline,
}: PokemonDetailSectionProps) {
  return (
    <section className="w-full mb-5">
      {/* <h2 className="text-xl font-bold mb-2">{title}</h2> */}
      <div className="flex flex-wrap justify-center">
        {data.map((item, idx) => (
          <div className={tag({ intent, size, outline })} key={idx}>
            {item.korean_name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PokemonDetailSection;
