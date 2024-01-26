type Props = {
  image: string;
};

export default function ProdutoCard({ image }: Props) {
  return (
    <div className="group">
      <img
        src={image}
        alt="Produto14"
        className="h-72 w-72 cursor-pointer rounded-sm"
      />
      <h3 className="mt-4 text-sm text-zinc-700 underline-offset-4 group-hover:underline">
        Exemplo de título do produto
      </h3>
      <p className="text-2xl font-semibold text-zinc-950">
        <span>R$</span> 19,99
      </p>
    </div>
  );
}
