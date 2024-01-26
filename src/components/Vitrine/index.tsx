import produto11 from "../../assets/produto11.png";
import produto14 from "../../assets/produto14.png";
import ProdutoCard from "../ProdutoCard";

export default function Vitrine() {
  return (
    <section id="vitrine" className="m-auto max-w-6xl py-12">
      <h2 className="mb-6 text-3xl text-zinc-900">Produtos</h2>
      <div className="grid grid-cols-4 gap-2">
        <ProdutoCard image={produto14} />
        <ProdutoCard image={produto14} />
        <ProdutoCard image={produto14} />
        <ProdutoCard image={produto14} />
        <ProdutoCard image={produto11} />
        <ProdutoCard image={produto11} />
        <ProdutoCard image={produto11} />
        <ProdutoCard image={produto11} />
      </div>
    </section>
  );
}
